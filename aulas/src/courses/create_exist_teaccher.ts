import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de React Native",
      description: "Curso do Ignite",
      teacher: {
        connect: {
          id: "3bd2a117-d210-42f1-bf41-b23b49dabefc"
        },
      },
    },    
  });

  console.log(result);
}

main();