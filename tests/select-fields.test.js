import {prismaClient} from "../src/prisma-client.js";

describe('Select fields', () => {
    it('should be able create with select', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "farid0",
                email: "farid0@test.com",
                phone: "081231222230",
                name: "Farid Azhari"
            },
            select: {
                id: true,
                name: true
            }
        });

        expect(customer.id).toBe("farid0");
        expect(customer.name).toBe("Farid Azhari");
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });

    it('should be able find many with select', async () => {
        const customers = await prismaClient.customer.findMany({

            select: {
                id: true,
                name: true
            }
        });

        for (const customer of customers) {
            expect(customer.id).toBeDefined()
            expect(customer.name).toBeDefined()
            expect(customer.email).toBeUndefined();
            expect(customer.phone).toBeUndefined();}
    });
})