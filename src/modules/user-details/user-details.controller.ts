import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { ID } from 'src/common/types';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { UserService } from '../user/user.service';
import { UserNotFound } from '../user/exception/user.exception';

@Controller('user-details')
export class UserDetailsController {
  constructor(
    @Inject("IUserDetailsService") private readonly userDetailsService:UserDetailsService,
    @Inject("IUserService") private readonly userService:UserService
  ) {}

  @Post()
  async create(@Body(new ValidationPipe()) dto: CreateUserDetailDto) {
    const data = await this.userService.findById(dto.userId)
    if(!data){
      throw new UserNotFound()
    }
    const resdata = await this.userDetailsService.create(dto)
    return resdata
  }

  @Get()
  async findAll() {
    const resdata = await this.userDetailsService.findAll()
    return resdata
  }

  @Get(':id')
  async findOne(@Param('id') id:ID) {
    const resdata = await this.userDetailsService.findById(id)
    return resdata
  }

  @Patch(':id')
  async update(@Param('id') id: ID, @Body(new ValidationPipe()) dto: UpdateUserDetailDto) {
    const resdata = await this.userDetailsService.update(id, dto);
    return resdata
  }

  @Delete(':id')
  async remove(@Param('id') id: ID) {
    const resdata = await this.userDetailsService.delete(id)
    return resdata
  }
}
