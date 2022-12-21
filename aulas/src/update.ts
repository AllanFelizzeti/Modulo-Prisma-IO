import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "26b62c12-eb69-4a71-a494-9da2ed84c68d",
    },
    data: {
      duration: 300,
      description: "Curso do Ignite Back-end",
    },
  });

  console.log(result);
}

main();