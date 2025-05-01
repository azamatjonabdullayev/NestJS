import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export const prisma: PrismaClient = new PrismaClient();

@Injectable()
export class AppService {
  async getUsers(): Promise<any[]> {
    const users = await prisma.users.findMany();
    return users;
  }

  async getById(id: string): Promise<any> {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async createUser(data: {
    name: string;
    email: string;
    age: number;
  }): Promise<any> {
    const user = await prisma.users.create({
      data,
    });
    return user;
  }

  async updateUser(
    id: string,
    data: { name: string; email: string; age: number },
  ): Promise<any> {
    const user = await prisma.users.update({
      where: {
        id,
      },
      data,
    });
    return user;
  }

  async deleteUser(id: string): Promise<any> {
    await prisma.users.delete({
      where: {
        id,
      },
    });
    return 'User deleted successfully';
  }
}
