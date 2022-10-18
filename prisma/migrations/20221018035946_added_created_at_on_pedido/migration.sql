-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pedidos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_value" INTEGER NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "forma_pgto" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "pedidos_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pedidos" ("forma_pgto", "id", "id_funcionario", "total_value") SELECT "forma_pgto", "id", "id_funcionario", "total_value" FROM "pedidos";
DROP TABLE "pedidos";
ALTER TABLE "new_pedidos" RENAME TO "pedidos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
