import Router from "express";
import LoginController from "../Controllers/LoginController.js";
import RoomsController from "../Controllers/RoomsController.js";
import DataController from "../Controllers/DataController.js";
import RegController from "../Controllers/RegController.js";

const router = new Router();

router.get("/datas", DataController.getTitle);
router.post("/datas", DataController.create);
router.post("/registration", RegController.create);
router.get("/users", RegController.getAll);
router.post("/login", LoginController.login);
router.get("/rooms", RoomsController.getAll);
router.post("/rooms", RoomsController.create);

export default router;
