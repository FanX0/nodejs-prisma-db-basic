import {prismaClient} from "../src/prisma-client.js";

describe('CRUD Many', () => {
    it("should be able to create many", async () => {
        const { count } = await prismaClient.customer.createMany({
            data: [
                {
                    id: "farid9",
                    email: "farid9@test.com",
                    phone: "0812329",
                    name: "Farid"
                },
                {
                    id: "azhari9",
                    email: "azhari9@test.com",
                    phone: "08123229",
                    name: "Azhari"
                },
            ]
        });
        expect(count).toBe(2);
    });

    it("should be able to update many", async () => {
        const { count } = await prismaClient.customer.updateMany({
            data: {
                email: "farid9@test.com"
            },
            where: {
                name: "Farid"
            }
        })

        expect(count).toBe(1);
    })

    it("should be able to delete many", async () => {
        const { count } = await prismaClient.customer.deleteMany({

            where: {
                name: "Farid"
            }
        })
        expect(count).toBe(1);
    })


    it("should be able to find many", async () => {
        const customers = await prismaClient.customer.findMany({})
        expect(customers.length).toBe(19);
    })
});