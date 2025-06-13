import { Dev } from "@prisma/client";
import { prisma } from "../prisma/client";

class DevService {
    public async register({ name, bio, techs, githubUrl, avatarUrl }: DevType): Promise<void> {
        const dev: Dev = {
            id: crypto.randomUUID(),
            name,
            bio,
            techs,
            githubUrl,
            avatarUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await prisma.dev.create({ data: dev });
    }

    public async getAll() {
        return await prisma.dev.findMany();
    }

    public async getById(id: string) {
        const dev = await prisma.dev.findUnique({ where: { id } });
        if (dev === null) {
            throw new Error("Dev não existe.");
        }
        return dev;
    }

    public async update(id: string, tech: string[]) {
        const available = await prisma.dev.findUnique({ where: { id } });
        if (!available) {
            throw new Error("Dev não existe");
        }

        const techs = available.techs.concat(tech);

        const dev = {
            techs,
            updatedAt: new Date(),
        };

        await prisma.dev.update({ where: { id }, data: dev });
    }

    public async deleteById(id: string) {
        return await prisma.dev.delete({ where: { id } });
    }
}

export const devService = new DevService();
