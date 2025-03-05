import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './category.repository';

@Module({
  imports: [SequelizeModule.forFeature([CategoryEntity])],
    controllers:[CategoryController],
    providers: [
      { provide: "ICategoryService", useClass: CategoryService },
      { provide: "ICategoryRepository", useClass: CategoryRepository }
    ]
})
export class CategoryModule {}
