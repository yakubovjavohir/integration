import { ID } from "src/common/types";
import { ProductEntity } from "../entities/product.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

export interface IProductRepository {
    findAll():Promise<Array<ProductEntity>>
    create(entity:CreateProductDto):Promise<ProductEntity>
    update(id:ID, entity:UpdateProductDto):Promise<ProductEntity | null>
    delete(id:ID):Promise<void>
    findById(id:ID):Promise<ProductEntity | null>
}