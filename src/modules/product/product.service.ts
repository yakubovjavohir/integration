import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductService } from './interface/user.service';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resData';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { ProductNotFound } from './exception/user.exception';

@Injectable()
export class ProductService implements IProductService{
  constructor(@Inject("IProductRepository") private readonly productRepository:ProductRepository){}
  async findAll(): Promise<ResData<Array<ProductEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<ProductEntity[]>(200, "success", data)
    return resdata
  }
  async create(dto: CreateProductDto): Promise<ResData<ProductEntity>> {
    const data = await this.productRepository.create(dto)
    const resdata = new ResData<ProductEntity>(200, "success", data)
    return resdata
  }
  async update(id: ID, dto: UpdateProductDto): Promise<ResData<ProductEntity | null>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<ProductEntity>(200, "success", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findById(id)
    await this.productRepository.delete(id)
    const resdata = new ResData<null>(200, "success")
    return resdata

  }
  async findById(id: ID): Promise<ResData<ProductEntity | null>> {
    const data = await this.productRepository.findById(id)
    
    if(!data){
      throw new ProductNotFound()
    }

    const resdata = new ResData<ProductEntity>(200, "success", data)
    return resdata
  }
  
}
