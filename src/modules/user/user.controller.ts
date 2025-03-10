import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ID } from 'src/common/types';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(@Inject("IUserService") private readonly userService:UserService) {}

  @Post()
  async create(@Body(new ValidationPipe()) dto: CreateUserDto) {
    const resdata = await this.userService.create(dto)
    return resdata
  }

  @Get()
  async findAll() {
    const resdata = await this.userService.findAll()
    return resdata
  }

  @Get(':id')
  async findOne(@Param('id') id:ID) {
    const resdata = await this.userService.findById(id)
    return resdata
  }

  @Patch(':id')
  async update(@Param('id') id: ID, @Body(new ValidationPipe()) dto: UpdateUserDto) {
    const resdata = await this.userService.update(id, dto);
    return resdata
  }

  @Delete(':id')
  async remove(@Param('id') id: ID) {
    const resdata = await this.userService.delete(id)
    return resdata
  }
}
