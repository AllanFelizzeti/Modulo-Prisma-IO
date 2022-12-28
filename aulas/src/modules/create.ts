import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      courses: {
        create: {
          course: {
            connect: {
              id: "d7764726-6865-429e-a564-5e1ec9402bda"
            }
          }
        }
      }
    },
  });

  console.log(result);
}

main();