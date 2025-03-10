import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductEntity } from 'src/modules/product/entities/product.entity';
@Table({ tableName: "categories" })
export class CategoryEntity extends Model {
  @Column({ allowNull: false })
  name: string;

  @HasMany(() => ProductEntity)
  products: ProductEntity[];
}
