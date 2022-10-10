import { Router } from "express";
import { CreatePedidoController } from "../modules/pedido/Controllers/CreatePedidoController";

const createPedidoController = new CreatePedidoController();
const pedidoRoutes = Router();

pedidoRoutes.post("/", createPedidoController.handle)

export { pedidoRoutes }