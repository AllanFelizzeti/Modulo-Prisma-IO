import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 350,
      name: "Curso de ReactJs",
      description: "Curso do Ignite",
      fk_id_teacher: "8299e7bb-bdf5-40a6-852f-e22357f337c5",
    },    
  });

  console.log(result);
}

main();