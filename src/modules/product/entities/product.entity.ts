import { Column, Model, Table } from 'sequelize-typescript';
@Table({ tableName: "products" })
export class ProductEntity extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false})
  price: number;

  @Column({ allowNull: false})
  count: number;
}
