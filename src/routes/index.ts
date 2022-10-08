import { Router } from "express";
import { userRoutes } from "./user.routes";
import { itemRoutes } from "./item.routes";
import { pedidoRoutes } from "./pedido.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/items", itemRoutes);
routes.use("/pedido", pedidoRoutes);

export { routes }