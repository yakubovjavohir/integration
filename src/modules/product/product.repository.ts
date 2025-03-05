import { InjectModel} from "@nestjs/sequelize";
import { ProductEntity } from "./entities/product.entity";
import { IProductRepository } from "./interface/user.repository";
import { CreateProductDto } from "./dto/create-product.dto";
import { ID } from "src/common/types";
import { UpdateProductDto } from "./dto/update-product.dto";


export class ProductRepository implements IProductRepository {
    constructor(@InjectModel(ProductEntity) private readonly productModel: typeof ProductEntity) {}
    async create(entity: CreateProductDto): Promise<ProductEntity> {
        const data = await this.productModel.create({...entity})
        return data
    }
    async findAll(): Promise<Array<ProductEntity>> {
        const data = await this.productModel.findAll()
        return data
    } 
    async update(id: ID, entity: UpdateProductDto): Promise<ProductEntity | null> {
        await this.productModel.update({...entity}, {where:{id}})
        const newData = await this.productModel.findOne({where:{id}})
        return newData
    }
    async delete(id: ID): Promise<void> {
        await this.productModel.destroy({where:{id}})
    }
    async findById(id: ID): Promise<ProductEntity | null> {
        const data = await this.productModel.findOne({where:{id}})
        return data
    }
}