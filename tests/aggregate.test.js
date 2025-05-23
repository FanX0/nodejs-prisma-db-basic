import {prismaClient} from "../src/prisma-client.js";

describe('Aggregate', () => {
    it('should be able query using aggregate', async () => {
    const result = await prismaClient.product.aggregate({
        _min: {
            price: true
        },
        _max: {
            price: true
        },
        _avg: {
            price: true
        }
    });

    expect(result._min.price).toBe(1000);
    expect(result._max.price).toBe(5000);
    expect(result._avg.price).toBe(3000);
    console.info(result);
});});

