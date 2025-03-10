import { ID } from "src/common/types";
import { UserDetailEntity } from "../entities/user-detail.entity";
import { CreateUserDetailDto } from "../dto/create-user-detail.dto";
import { UpdateUserDetailDto } from "../dto/update-user-detail.dto";

export interface IUserDetailsRepository {
    findAll():Promise<Array<UserDetailEntity>>
    create(entity:CreateUserDetailDto):Promise<UserDetailEntity>
    update(id:ID, entity:UpdateUserDetailDto):Promise<UserDetailEntity | null>
    delete(id:ID):Promise<void>
    findById(id:ID):Promise<UserDetailEntity | null>
}