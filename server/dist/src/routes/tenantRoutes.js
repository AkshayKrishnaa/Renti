import expresss from "express";
import { getTenant, createTenant } from "../controllers/tenantControllers.js";
const router = expresss.Router();
router.get("/:cognitoId", getTenant);
router.post("/", createTenant);
export default router;
//# sourceMappingURL=tenantRoutes.js.map