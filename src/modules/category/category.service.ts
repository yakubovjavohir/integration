import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ICategoryService } from './interface/user.service';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resData';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './category.repository';
import { CategoryExist, CategoryNotFound } from './exception/user.exception';

@Injectable()
export class CategoryService implements ICategoryService{
  constructor(@Inject("ICategoryRepository") private readonly categoryRepository:CategoryRepository){}
  async findAll(): Promise<ResData<Array<CategoryEntity>>> {
    const data = await this.categoryRepository.findAll()
    const resdata = new ResData<CategoryEntity[]>(200, "success", data)
    return resdata
  }
  async create(dto: CreateCategoryDto): Promise<ResData<CategoryEntity>> {
    const exist = await this.categoryRepository.findName(dto.name)
    if(exist){
      throw new CategoryExist()
    }
    const data = await this.categoryRepository.create(dto)
    const resdata = new ResData<CategoryEntity>(200, "created", data)
    return resdata
  }
  async update(id: ID, dto: UpdateCategoryDto): Promise<ResData<CategoryEntity | null>> {
    await this.findById(id)
    const data = await this.categoryRepository.update(id, dto)
    const resdata = new ResData<CategoryEntity>(200, "update", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<null>> {
    await this.findById(id)
    await this.categoryRepository.delete(id)
    const resdata = new ResData<null>(200, "deleted")
    return resdata
  }
  async findById(id: ID): Promise<ResData<CategoryEntity | null>> {
    const data = await this.categoryRepository.findById(id)
    
    if(!data){
      throw new CategoryNotFound()
    }

    const resdata = new ResData<CategoryEntity>(200, "update", data)
    return resdata
  }
  
}
