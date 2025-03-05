import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ID } from 'src/common/types';

@Controller('product')
export class ProductController {
  constructor(@Inject("IProductService") private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ID) {
    return this.productService.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: ID, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ID) {
    return this.productService.delete(id);
  }
}
