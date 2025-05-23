import {prismaClient} from "../src/prisma-client.js";

describe('group by', () => {
    it('should be able query using groupBy', async () => {
        const result = await prismaClient.product.groupBy({
            by: ['category'],
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            },
            having: {
                price: {
                   _avg: {
                       gt: 3000
                   }
                }
            }
        });

      for (const item of result) {
          console.info(`Category : ${item.category} ${item.price}, min ${item._min.price}, max ${item._max.price}, avg ${item._avg.price}`);
      }

    });});

