import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "d7764726-6865-429e-a564-5e1ec9402bda",
      fk_id_module: "5688b277-a66a-486e-9a2e-95110ba1ed56",
    },
  });

  console.log(result);
}

main();