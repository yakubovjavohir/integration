import { ResData } from "../../../lib/resData";
import { ProductEntity } from "../entities/product.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { ID } from "src/common/types";
import { UpdateProductDto } from "../dto/update-product.dto";

export interface IProductService {
    findAll():Promise<ResData<Array<ProductEntity>>>
    create(dto:CreateProductDto):Promise<ResData<ProductEntity>>
    update(id:ID, dto:UpdateProductDto):Promise<ResData<ProductEntity | null>>
    delete(id:ID):Promise<ResData<null>>
    findById(id:ID):Promise<ResData<ProductEntity | null>>
}