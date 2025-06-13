import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { devService } from "../Services/DevService";

export async function DevController(app: FastifyInstance) {
    app.post("/dev", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as DevType;
        try {
            await devService.register(body);
            return reply.status(201).send(body);
        } catch (error: any) {
            return reply.status(400).send({ error: error.message });
        }
    });

    app.get("/dev", async (_, reply: FastifyReply) => {
        try {
            const devs = await devService.getAll();
            return reply.status(200).send(devs);
        } catch (error: any) {
            return reply.status(400).send({ error: error.message });
        }
    });

    app.get("/dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const dev = await devService.getById(id);
            return reply.status(200).send(dev);
        } catch (error: any) {
            return reply.status(404).send({ error: error.message });
        }
    });

    app.patch("/dev/update/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const { tech } = request.body as { tech: string[] };
        try {
            const update = await devService.update(id, tech);
            return reply.status(200).send(update);
        } catch (error: any) {
            return reply.status(404).send({ error: error.message });
        }
    });

    app.delete("/dev/delete/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const del = await devService.deleteById(id);
            return reply.status(200).send();
        } catch (error: any) {
            return reply.status(404).send({ error: error.message });
        }
    });
}
