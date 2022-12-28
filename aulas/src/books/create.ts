import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Limpa",
      author_id: "152f9ff5-050f-49ca-9e55-77a537875519",
    },
  });

  console.log(result);
}

main();