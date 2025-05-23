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

})