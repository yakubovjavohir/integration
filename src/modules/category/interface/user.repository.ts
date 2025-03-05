import { ID } from "src/common/types";
import { CategoryEntity } from "../entities/category.entity";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export interface ICategoryRepository {
    findAll():Promise<Array<CategoryEntity>>
    create(entity:CreateCategoryDto):Promise<CategoryEntity>
    update(id:ID, entity:UpdateCategoryDto):Promise<CategoryEntity | null>
    delete(id:ID):Promise<void>
    findById(id:ID):Promise<CategoryEntity | null>
    findName(name:string):Promise<CategoryEntity | null>
}