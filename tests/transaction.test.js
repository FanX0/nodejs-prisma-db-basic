import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client Transaction",() => {
    it("should be able to create customer with sequential transaction", async () => {
        const[farid,azhari] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "farid6",
                    email: "farid6@test.com",
                    name: "Farid Azhari",
                    phone: "032131926"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "azhari6",
                    email: "azhari6@test.com",
                    name: "Farid Azhari",
                    phone: "0895324296"
                }
            })
        ], {
            timeout: 5,
        });
        expect(farid.name).toBe("Farid Azhari");
        expect(azhari.name).toBe("Farid Azhari");
    })

    it("should be able to create customer with interactive transaction", async () => {
        const[farid,azhari] = await prismaClient.$transaction(async (prisma) => {
                const farid = await prisma.customer.create({
                    data: {
                        id: "farid8",
                        email: "farid8@test.com",
                        name: "Farid Azhari",
                        phone: "032131928"
                    }
                })
                const azhari = await prisma.customer.create({
                    data: {
                        id: "azhari8",
                        email: "azhari8@test.com",
                        name: "Farid Azhari",
                        phone: "0898324297"
                    }
                })
            return [farid,azhari];
        }, {
            timeout: 5000,
        });
        expect(farid.name).toBe("Farid Azhari");
        expect(azhari.name).toBe("Farid Azhari");
    })
})

