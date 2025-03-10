import { ID } from "src/common/types";
import { UserEntity } from "../entities/user.entity";

export interface IUserRepository {
    findAll():Promise<Array<UserEntity>>
    create(entity:UserEntity):Promise<UserEntity>
    update(id:ID, entity:UserEntity):Promise<UserEntity | null>
    delete(id:ID):Promise<void>
    findById(id:ID):Promise<UserEntity | null>
    phoneExist(phone:string):Promise<UserEntity | null>
}