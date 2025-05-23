import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', function () {
    it('should can where', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                OR: [
                    {
                        name: "A"
                    },
                    {
                        name: "B"
                    }
                ]
            },
            orderBy: [
                {
                    name: "asc"
                }
            ]
        });

        console.info(products);

        expect(products.length).toBe(2);
        expect(products[0].name).toBe("A");
        expect(products[1].name).toBe("B");
    });
});
