import { prismaClient } from "../src/prisma-client";

describe("Prisma CLient CRUD", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "farid",
        email: "farid@test.com",
        name: "farid",
        phone: "0893214959",
      },
    });
    expect(customer.id).toBe("farid");
    expect(customer.email).toBe("farid@test.com");
    expect(customer.name).toBe("farid");
    expect(customer.phone).toBe("0893214959");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "farid azhari",
      },
      where: {
        id: "farid",
      },
    });
    expect(customer.id).toBe("farid");
    expect(customer.email).toBe("farid@test.com");
    expect(customer.name).toBe("farid azhari");
    expect(customer.phone).toBe("0893214959");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "farid",
      },
    });
    expect(customer.id).toBe("farid");
    expect(customer.email).toBe("farid@test.com");
    expect(customer.name).toBe("farid azhari");
    expect(customer.phone).toBe("0893214959");
  });
});
