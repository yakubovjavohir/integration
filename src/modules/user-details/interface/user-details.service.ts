import { ResData } from "src/lib/resData";
import { UserDetailEntity } from "../entities/user-detail.entity";
import { CreateUserDetailDto } from "../dto/create-user-detail.dto";
import { ID } from "src/common/types";
import { UpdateUserDetailDto } from "../dto/update-user-detail.dto";

export interface IUserDetailsService {
    findAll():Promise<ResData<Array<UserDetailEntity>>>
    create(dto:CreateUserDetailDto):Promise<ResData<UserDetailEntity>>
    update(id:ID, dto:UpdateUserDetailDto):Promise<ResData<UserDetailEntity | null>>
    delete(id:ID):Promise<ResData<null>>
    findById(id:ID):Promise<ResData<UserDetailEntity | null>>
}