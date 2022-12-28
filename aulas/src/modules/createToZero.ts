import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "NodeJs",
          description: "Ignite Back-end",
          teacher: {
            create: {
              name: "Diego Fernades",
            },
          },
        },
      },
      module: {
        create: {
          name: "Prisma IO",
          description: "OMR que falicita sua vida"
        },
      },
    },
  });

  console.log(result);
}

main();