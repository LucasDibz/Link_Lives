import { Router } from "express";
import DonatorsController from "./controllers/DonatorsController";
import PatientsController from "./controllers/PatientsController";

const routes = Router();

//Donators
routes.get("/donators", DonatorsController.index);
routes.get("/donators/:cpf", DonatorsController.find);
routes.post("/donators", DonatorsController.create);
routes.put("/donators/:id", DonatorsController.update);
routes.delete("/donators/:cpf", DonatorsController.remove);

//Patients
routes.get("/patients/:id", PatientsController.find);
routes.post("/patients", PatientsController.create);

export default routes;
