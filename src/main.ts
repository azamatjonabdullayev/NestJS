import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const bootstrap = async () => {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);
  prisma.$connect();
  await app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

bootstrap()
  .then(() => {})
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
