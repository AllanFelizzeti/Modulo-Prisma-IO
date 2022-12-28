import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "d7764726-6865-429e-a564-5e1ec9402bda",
    },
    include: {
      modules: true,
    },
  });

  console.log(result);
}

main();