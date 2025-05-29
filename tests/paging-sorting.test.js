import {prismaClient} from "../src/prisma-client";
describe("Prisma Client Method findMany", () => {
    it("should be able to read many with paging", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 1,
        });
        expect(page1.length).toBe(1);

        const page2 = await prismaClient.customer.findMany({
            skip: 1,
            take: 1
        });
        expect(page2.length).toBe(1);

        const page3 = await prismaClient.customer.findMany({
            skip: 2,
            take: 1
        });
        expect(page3.length).toBe(1);
    });
    it("should be able to read many with paging and sorting", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 5,
            orderBy: [
                {
                    name:"desc"
                },
                {
                    email:"asc"
                }
            ]
        });
        expect(page1.length).toBe(5);
        console.info(page1);

        const page2 = await prismaClient.customer.findMany({
            skip: 1,
            take: 5,
            orderBy: [
                {
                    name:"desc"
                },
                {
                    email:"asc"
                }
            ]
        });
        expect(page2.length).toBe(5);
        console.info(page2);

        const page3 = await prismaClient.customer.findMany({
            skip: 2,
            take: 5,
            orderBy: [
                {
                    name:"desc"
                },
                {
                    email:"asc"
                }
            ]
        });
        expect(page3.length).toBe(5);
        console.info(page3);
    });
})
