import { InjectModel, SequelizeModule } from "@nestjs/sequelize";
import { UserEntity } from "./entities/user.entity";
import { IUserRepository } from "./interface/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { ID } from "src/common/types";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ProductEntity } from "../product/entities/product.entity";


export class UserRepository implements IUserRepository {
    constructor(@InjectModel(UserEntity) private readonly userModel: typeof UserEntity) {}
    async create(entity: CreateUserDto): Promise<UserEntity> {
        const data = await this.userModel.create({...entity})
        return data
    }
    async findAll(): Promise<Array<UserEntity>> {
        const data = await this.userModel.findAll({
            include:[
                {model:ProductEntity}
            ]
        })
        return data
    } 
    async update(id: ID, entity: UpdateUserDto): Promise<UserEntity | null> {
        await this.userModel.update({...entity}, {where:{id}})
        const newData = await this.userModel.findOne({where:{id}})
        return newData
    }
    async delete(id: ID): Promise<void> {
        await this.userModel.destroy({where:{id}})
    }
    async findById(id: ID): Promise<UserEntity | null> {
        const data = await this.userModel.findOne({where:{id}})
        return data
    }
    async phoneExist(phone: string): Promise<UserEntity | null> {
        const data = await this.userModel.findOne({where:{phone}})
        return data
    }
}