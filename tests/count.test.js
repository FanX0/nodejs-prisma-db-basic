import {prismaClient} from "../src/prisma-client.js";

describe('should be able count', () => {
    it('should be count', async () => {
        const count = await prismaClient.customer.count({
            where: {
                name: "Azhari"
            }
        })
        expect(count).toBe(1);
    })
})