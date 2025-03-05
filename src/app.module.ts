import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ok',
    database: 'sql',
    synchronize:true,
    autoLoadModels:true,
  }),ProductModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
