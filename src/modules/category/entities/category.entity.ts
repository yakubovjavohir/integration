import { Column, Model, Table } from 'sequelize-typescript';
@Table({ tableName: "categories" })
export class CategoryEntity extends Model {
  @Column({ allowNull: false })
  name: string;
}
