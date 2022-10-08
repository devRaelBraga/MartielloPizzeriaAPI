import { Router } from "express";
import { CreateItemController } from "../modules/items/useCases/CreateItemController";

const createItemController = new CreateItemController();
const itemRoutes = Router();

itemRoutes.post("/", createItemController.handle)

export { itemRoutes }