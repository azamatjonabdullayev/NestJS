import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async showAllUsers(): Promise<any[]> {
    return await this.appService.getUsers();
  }

  @Get(':id')
  async showById(@Param('id') id: string): Promise<any> {
    return await this.appService.getById(id);
  }

  @Post('/new')
  async createUser(@Body() data: { name: string; email: string; age: number }) {
    return await this.appService.createUser(data);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: { name: string; email: string; age: number },
  ) {
    return await this.appService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.appService.deleteUser(id);
  }
}
