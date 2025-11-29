import expresss from "express";
import {
    getTenant,
    createTenant
} from "../controllers/tenantControllers";

const router = expresss.Router();

router.get("/:cognitoId", getTenant);
router.post("/", createTenant);


export default router;