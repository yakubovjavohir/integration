import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { IUserService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { UserRepository } from './user.repository';
import { ID } from 'src/common/types';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotFound, UserPhoneExist } from './exception/user.exception';

@Injectable()
export class UserService implements IUserService{
  constructor(
    @Inject("IUserRepository")
    private readonly userRepository: UserRepository
  ) {}
  async create(dto: CreateUserDto): Promise<ResData<UserEntity>> {
    await this.phoneExist(dto.phone)
    const data = await this.userRepository.create(dto)
    const resdata = new ResData<UserEntity>(201, "created", data)
    return resdata
  }

  async findAll():Promise<ResData<Array<UserEntity>>> {
    const data = await this.userRepository.findAll()
    
    const resdata = new ResData<UserEntity[]>(200, "success", data)
    return resdata
  }

  async findById(id: ID): Promise<ResData<UserEntity | null>> {
    const data = await this.userRepository.findById(id)
    if(!data){
      throw new UserNotFound()
    }
    const resdata = new ResData<UserEntity>(200, "success", data)
    return resdata
  }
  
  async update(id: ID, dto: UpdateUserDto): Promise<ResData<UserEntity | null>> {
    await this.findById(id)
    const data = await this.userRepository.update(id, dto)
    const resdata = new ResData<UserEntity>(200, "update user", data)
    return resdata
  }
  
  async delete(id: ID): Promise<ResData<null>> {
    await this.findById(id)
    await this.userRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted")
    return resdata
  }
  
  async phoneExist(phone: string): Promise<void> {
    const data = await this.userRepository.phoneExist(phone)
    if(data){
      throw new UserPhoneExist()
    }
  }
}
