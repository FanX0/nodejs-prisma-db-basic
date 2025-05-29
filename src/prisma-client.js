import { PrismaClient } from "../generated/prisma";

export const prismaClient = new PrismaClient({
  errorFormat: "pretty",
  log: ["info", "query", "info", "warn"],
});
