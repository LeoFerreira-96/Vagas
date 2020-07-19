import { Router } from "express";
import errorHandler from "./middlewares/errorHandler";
import ItemController from "./app/controllers/ItemController";

const routes = Router();

routes.use(errorHandler);
routes.get("/items", ItemController.index);
routes.get("/items/:id", ItemController.search);
routes.post("/items", ItemController.store);
routes.put("/items/:id", ItemController.update);
routes.delete("/items/:id", ItemController.delete);

export default routes;
