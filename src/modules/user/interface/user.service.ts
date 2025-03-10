import { ResData } from "src/lib/resData";
import { UserEntity } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { ID } from "src/common/types";
import { UpdateUserDto } from "../dto/update-user.dto";

export interface IUserService {
    findAll():Promise<ResData<Array<UserEntity>>>
    create(dto:CreateUserDto):Promise<ResData<UserEntity>>
    update(id:ID, dto:UpdateUserDto):Promise<ResData<UserEntity | null>>
    delete(id:ID):Promise<ResData<null>>
    findById(id:ID):Promise<ResData<UserEntity | null>>
    phoneExist(phone:string):Promise<void>
}