import express from "express";
import {
  loginClient,
  registerClient,
  getAllClient,
  setApply,
  deleteClient,
  getClient,
  editClient,
  setRate,
} from "../controllers/clientController.js";
const router = express.Router();

router.post("/loginClient", loginClient);
router.post("/editClient/:id", editClient);
router.post("/registerClient", registerClient);
router.get("/getAllClient", getAllClient);
router.put("/setApply", setApply);
router.put("/setRate", setRate);
router.post("/deleteClient", deleteClient);
router.get("/getClient/:id", getClient);

export default router;
