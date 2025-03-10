import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

@Table({ tableName: "products" })
export class ProductEntity extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  price: number;

  @Column({ allowNull: false })
  count: number;

  @ForeignKey(() => CategoryEntity)
  @Column
  categoryId: number;

  @BelongsTo(() => CategoryEntity)
  category: CategoryEntity;

  @ForeignKey(() => UserEntity) 
  @Column({ allowNull: false })
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;
}
