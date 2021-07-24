import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";
import { Status } from "@nt-al/api-interfaces"

@Table({
  modelName: 'tasks',
  timestamps: true,
  paranoid: true,
  underscored: true
})
export class Task extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true
  })
  id?: number;

  @Column(DataType.STRING)
  status?: Status;

  @Column
  description: string;
}
