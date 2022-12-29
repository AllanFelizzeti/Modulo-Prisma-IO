import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de React ",
      description: "Curso do Ignite",
      teacher: {
        connect: {
          id: "2d707e2c-cdef-4a68-a1ea-bea2269cb3c3"
        },
      },
    },    
  });

  console.log(result);
}

main();