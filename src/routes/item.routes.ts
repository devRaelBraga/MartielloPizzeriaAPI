import { Router } from "express";
import { CreateItemController } from "../modules/items/Controllers/CreateItemController";
import { GetAllItemsController } from "../modules/items/Controllers/GetallItemsController";

const getAllItemsController = new GetAllItemsController();
const createItemController = new CreateItemController();
const itemRoutes = Router();

itemRoutes.post("/", createItemController.handle);
itemRoutes.get("/", getAllItemsController.handle);

export { itemRoutes }