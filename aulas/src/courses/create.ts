import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.create({
    data: {
      name: "React Native ",
      duration: 300,
      description: "Ignite Mobile",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Rodrigo Gonçalvez",
          },
          create: {
            name: "Rodrigo Gonçalvez",
          },
        },
      },
    },
  });

  console.log(result);
}

main();