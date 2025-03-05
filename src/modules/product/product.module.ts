import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductRepository } from './product.repository';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductEntity])],
  controllers:[ProductController],
  providers: [
    { provide: "IProductService", useClass: ProductService },
    { provide: "IProductRepository", useClass: ProductRepository }
  ]
})
export class ProductModule {}
