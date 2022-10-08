/*
  Warnings:

  - The primary key for the `itenspedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_item` on the `itenspedido` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id_pedido` on the `itenspedido` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `items` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `pedidos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `funcionario` on the `pedidos` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `pedidos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `qtd` to the `itenspedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_funcionario` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_itenspedido" (
    "id_item" INTEGER NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "qtd" INTEGER NOT NULL,

    PRIMARY KEY ("id_item", "id_pedido"),
    CONSTRAINT "itenspedido_id_item_fkey" FOREIGN KEY ("id_item") REFERENCES "items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "itenspedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedidos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_itenspedido" ("id_item", "id_pedido") SELECT "id_item", "id_pedido" FROM "itenspedido";
DROP TABLE "itenspedido";
ALTER TABLE "new_itenspedido" RENAME TO "itenspedido";
CREATE TABLE "new_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_items" ("created_at", "description", "id", "name", "updated_at") SELECT "created_at", "description", "id", "name", "updated_at" FROM "items";
DROP TABLE "items";
ALTER TABLE "new_items" RENAME TO "items";
CREATE UNIQUE INDEX "items_name_key" ON "items"("name");
CREATE TABLE "new_pedidos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_value" INTEGER NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "forma_pgto" TEXT NOT NULL,
    CONSTRAINT "pedidos_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pedidos" ("forma_pgto", "id", "total_value") SELECT "forma_pgto", "id", "total_value" FROM "pedidos";
DROP TABLE "pedidos";
ALTER TABLE "new_pedidos" RENAME TO "pedidos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
