import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UserDetailEntity } from './entities/user-detail.entity';
import { IUserDetailsService } from './interface/user-details.service';
import { ResData } from 'src/lib/resData';
import { UserDetailsRepository } from './user-details.repository';
import { ID } from 'src/common/types';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { UserDetailsNotFound } from './exception/user.exception';

@Injectable()
export class UserDetailsService implements IUserDetailsService{
  constructor(
    @Inject("IUserDetailsRepository")
    private readonly userDetailsRepository: UserDetailsRepository
  ) {}
  async create(dto: CreateUserDetailDto): Promise<ResData<UserDetailEntity>> {
    const data = await this.userDetailsRepository.create(dto)
    const resdata = new ResData<UserDetailEntity>(201, "created", data)
    return resdata
  }

  async findAll():Promise<ResData<Array<UserDetailEntity>>> {
    const data = await this.userDetailsRepository.findAll()
    
    const resdata = new ResData<UserDetailEntity[]>(200, "success", data)
    return resdata
  }

  async findById(id: ID): Promise<ResData<UserDetailEntity | null>> {
    const data = await this.userDetailsRepository.findById(id)
    if(!data){
      throw new UserDetailsNotFound()
    }
    const resdata = new ResData<UserDetailEntity>(200, "success", data)
    return resdata
  }
  
  async update(id: ID, dto: UpdateUserDetailDto): Promise<ResData<UserDetailEntity | null>> {
    await this.findById(id)
    const data = await this.userDetailsRepository.update(id, dto)
    const resdata = new ResData<UserDetailEntity>(200, "update user", data)
    return resdata
  }
  
  async delete(id: ID): Promise<ResData<null>> {
    await this.findById(id)
    await this.userDetailsRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted")
    return resdata
  }
}
