import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 400,
      name: "Curso de Elixir",
      description: "Curso do Ignite",
      teacher: {
        create: {
          name: "Rafa Camargo"
        },
      },
    },    
  });

  console.log(result);
}

main();