import expresss from "express";
import { getManager, createManager } from "../controllers/managerControllers.js";
const router = expresss.Router();
router.get("/:cognitoId", getManager);
router.post("/", createManager);
export default router;
//# sourceMappingURL=managerRoutes.js.map