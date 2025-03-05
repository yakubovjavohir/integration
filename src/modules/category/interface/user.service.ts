import { ResData } from "../../../lib/resData";
import { CategoryEntity } from "../entities/category.entity";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { ID } from "src/common/types";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export interface ICategoryService {
    findAll():Promise<ResData<Array<CategoryEntity>>>
    create(dto:CreateCategoryDto):Promise<ResData<CategoryEntity>>
    update(id:ID, dto:UpdateCategoryDto):Promise<ResData<CategoryEntity | null>>
    delete(id:ID):Promise<ResData<null>>
    findById(id:ID):Promise<ResData<CategoryEntity | null>>
}