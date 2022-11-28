import Router from "express";
import LoginController from "./Controllers/LoginController.js";
import RoomsController from "./Controllers/RoomsController.js";
import DataController from "./DataController.js";
import PostController from "./PostController.js";
import RegController from "./RegController.js";

const router = new Router();

router.get("/datas", DataController.getTitle);
router.post("/datas", DataController.create);
router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);
router.post("/registration", RegController.create);
router.get("/users", RegController.getAll);
router.post("/login", LoginController.login);
router.get("/rooms", RoomsController.getAll);
router.post("/rooms", RoomsController.create);

export default router;
