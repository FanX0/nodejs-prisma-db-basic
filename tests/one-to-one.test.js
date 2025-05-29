import {prismaClient} from "../src/prisma-client.js";

it("should be able to create one to one", async () => {
    const wallet = await prismaClient.wallet.create({
        data: {
            id: "farid",
            customer_id: "farid",
            balance: 1000000,
        },
        include: {
            customer: true
        }
    })

    console.info(wallet);
});

it("should be able to create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
        data: {
            id: "asep",
            name: "asep",
            phone: "0831241",
            email: "joko@test.com",
            wallet: {
                create: {
                    id: "asep",
                    balance: 200000
                }
            }
        },
        include: {
            wallet: true
        }
    });

    console.info(customer);
});


it("should be able to find one to one", async () => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "farid"
        },
        include: {
            wallet: true
        }
    });

    console.info(customer);
});

it("should be able to find many one to one", async () => {
    const customers = await prismaClient.customer.findMany({
        where: {
            wallet: {
                isNot: null
            }
        },
        include: {
            wallet: true
        }
    });

    console.info(customers);
});
