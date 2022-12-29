import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "JavaScrypt",
          description: "Curso de JS",
          teacher: {
            create: {
              name: "Mayk Brito",
            },
          },
        },
      },
      module: {
        create: {
          name: "Iniciabte em Js ",
          description: "Comecando"
        },
      },
    },
  });

  console.log(result);
}

main();