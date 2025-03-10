import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserEntity } from 'src/modules/user/entities/user.entity';

@Table({ tableName: "user_details" })
export class UserDetailEntity extends Model {
  @Column({field:"age", allowNull: false })
  age: number;

  @Column({field:"full_name",  allowNull: false })
  fullName: string;

  @Column({field:"gender", allowNull: false })
  gender: string;

  @ForeignKey(() => UserEntity)
  @Column({field:"user_id", allowNull: false })
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;
}
