import { Router } from "express";
import { CreatePedidoController } from "../modules/pedido/Controllers/CreatePedidoController";
import { GetAllPedidosController } from "../modules/pedido/Controllers/GetAllPedidosController";
import { GetItemsPedidoController } from "../modules/pedido/Controllers/GetItensPedidoController";
import { CreateItemPedidoController } from "../modules/pedido/Controllers/ItensPedidoController";

const getItemsPedido = new GetItemsPedidoController();
const getAllPedidosController = new GetAllPedidosController();
const createPedidoController = new CreatePedidoController();
const createItemPedidoController = new CreateItemPedidoController();
const pedidoRoutes = Router();

pedidoRoutes.post("/getbyid", getItemsPedido.handle)
pedidoRoutes.get("/", getAllPedidosController.handle)
pedidoRoutes.post("/", createPedidoController.handle)
pedidoRoutes.post("/additem", createItemPedidoController.handle)

export { pedidoRoutes }