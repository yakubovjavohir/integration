import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { ProductEntity } from 'src/modules/product/entities/product.entity';
import { UserDetailEntity } from 'src/modules/user-details/entities/user-detail.entity';

@Table({ tableName: "users" })
export class UserEntity extends Model {
  @Column({field:"phone", allowNull: false })
  phone: string;

  @Column({field:"password", allowNull: false })
  password: string;

  @HasOne(() => UserDetailEntity)
  userDetail: UserDetailEntity;

  @HasMany(() => ProductEntity)
  product:ProductEntity[]
}
