import express from "express";
import * as controller from "../modules/certificate/certificate.controller";
// import  authProtect from "../middlewares/auth.middleware";

const router = express.Router();


// not tested yet
// ✅ Public access (via QR)
router.get("/:id", controller.getCertificateById);


export default router;