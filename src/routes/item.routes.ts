import { Router } from "express";
import { CreateItemController } from "../modules/items/Controllers/CreateItemController";
import { GetAllItemsController } from "../modules/items/Controllers/GetallItemsController";
import { GetItemController } from "../modules/items/Controllers/GetItemController";

const getItemController = new GetItemController();
const getAllItemsController = new GetAllItemsController();
const createItemController = new CreateItemController();
const itemRoutes = Router();

itemRoutes.post("/", createItemController.handle);
itemRoutes.post("/id", getItemController.handle);
itemRoutes.get("/all", getAllItemsController.handle);

export { itemRoutes }