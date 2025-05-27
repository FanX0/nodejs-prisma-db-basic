import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', function () {
    it('should can insert many to many relation', async () => {
        const like = await prismaClient.like.create({
            data: {
                customer_id: "farid",
                product_id: "P0001"
            },
            include: {
                customer: true,
                product: true
            }
        });
        console.info(like);
    });

    it('should can find one with many to many relation', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "farid"
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.info(customer);
    });
});
