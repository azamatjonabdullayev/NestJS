import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export const prisma: PrismaClient = new PrismaClient();

@Injectable()
export class AppService {
  async getUsers(): Promise<any[]> {
    const users = await prisma.users.findMany();
    return users;
  }

  async getById(id: number): Promise<any> {
    const user = await prisma.users.findUnique({
      where: {
        id: String(id),
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
    id: number,
    data: { name: string; email: string; age: number },
  ): Promise<any> {
    const user = await prisma.users.update({
      where: {
        id: String(id),
      },
      data,
    });
    return user;
  }

  async deleteUser(id: number): Promise<any> {
    const user = await prisma.users.delete({
      where: {
        id: String(id),
      },
    });
    return 'User deleted successfully';
  }
}
