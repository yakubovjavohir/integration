import { InjectModel} from "@nestjs/sequelize";
import { CategoryEntity } from "./entities/category.entity";
import { ICategoryRepository } from "./interface/user.repository";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { ID } from "src/common/types";
import { UpdateCategoryDto } from "./dto/update-category.dto";


export class CategoryRepository implements ICategoryRepository {
    constructor(@InjectModel(CategoryEntity) private readonly categoryModel: typeof CategoryEntity) {}
    async create(entity: CreateCategoryDto): Promise<CategoryEntity> {
        const data = await this.categoryModel.create({...entity})
        return data
    }
    async findAll(): Promise<Array<CategoryEntity>> {
        const data = await this.categoryModel.findAll()
        return data
    } 
    async update(id: ID, entity: UpdateCategoryDto): Promise<CategoryEntity | null> {
        await this.categoryModel.update({...entity}, {where:{id}})
        const newData = await this.categoryModel.findOne({where:{id}})
        return newData
    }
    async delete(id: ID): Promise<void> {
        await this.categoryModel.destroy({where:{id}})
    }
    async findById(id: ID): Promise<CategoryEntity | null> {
        const data = await this.categoryModel.findOne({where:{id}})
        return data
    }
    async findName(name: string): Promise<CategoryEntity | null> {
        const data = await this.categoryModel.findOne({where:{name}})
        return data
    }
}