import { InjectModel } from "@nestjs/sequelize";
import { UserDetailEntity } from "./entities/user-detail.entity";
import { IUserDetailsRepository } from "./interface/user-details.repository";
import { CreateUserDetailDto } from "./dto/create-user-detail.dto";
import { ID } from "src/common/types";
import { UpdateUserDetailDto } from "./dto/update-user-detail.dto";
import { UserEntity } from "../user/entities/user.entity";


export class UserDetailsRepository implements IUserDetailsRepository {
    constructor(@InjectModel(UserDetailEntity) private readonly userDetailsModel: typeof UserDetailEntity) {}
    async create(entity: CreateUserDetailDto): Promise<UserDetailEntity> {
        const data = await this.userDetailsModel.create({...entity})
        return data
    }
    async findAll(): Promise<Array<UserDetailEntity>> {
        const data = await this.userDetailsModel.findAll({
            include:[{model:UserEntity}],
        })        


        return data
    } 
    async update(id: ID, entity: UpdateUserDetailDto): Promise<UserDetailEntity | null> {
        await this.userDetailsModel.update({...entity}, {where:{id}})
        const newData = await this.userDetailsModel.findOne({where:{id}})
        return newData
    }
    async delete(id: ID): Promise<void> {
        await this.userDetailsModel.destroy({where:{id}})
    }
    async findById(id: ID): Promise<UserDetailEntity | null> {
        const data = await this.userDetailsModel.findOne({where:{id}, include: [{ model: UserEntity }]})
        return data
    }
}