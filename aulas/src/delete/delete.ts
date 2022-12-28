import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "74c1aed2-4279-476a-a525-49daf2a05716",
    },
  });

  console.log(result);
}

main();