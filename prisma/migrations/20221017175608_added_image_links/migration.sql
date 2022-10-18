-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "link_foto" TEXT NOT NULL DEFAULT 'None',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_items" ("created_at", "description", "id", "name", "updated_at", "value") SELECT "created_at", "description", "id", "name", "updated_at", "value" FROM "items";
DROP TABLE "items";
ALTER TABLE "new_items" RENAME TO "items";
CREATE UNIQUE INDEX "items_name_key" ON "items"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
