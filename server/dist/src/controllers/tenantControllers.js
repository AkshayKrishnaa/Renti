import {} from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getTenant = async (req, res) => {
    try {
        const { cognitoId } = req.params;
        if (!cognitoId) {
            res.status(400).json({ message: "Cognito ID is required" });
            return;
        }
        const tenant = await prisma.tenant.findUnique({
            where: { cognitoId },
            include: {
                favorites: true
            }
        });
        if (tenant) {
            res.json(tenant);
        }
        else {
            res.status(404).json({ message: "Tenant not found" });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving tenant: ${error.message}` });
    }
};
export const createTenant = async (req, res) => {
    try {
        const { cognitoId, name, email, phoneNumber } = req.body;
        if (!cognitoId) {
            res.status(400).json({ message: "Cognito ID is required" });
            return;
        }
        const tenant = await prisma.tenant.create({
            data: { cognitoId, name, email, phoneNumber },
        });
        res.status(201).json(tenant);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving tenant: ${error.message}` });
    }
};
//# sourceMappingURL=tenantControllers.js.map