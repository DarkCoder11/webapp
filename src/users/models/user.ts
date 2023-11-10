import { Column, DataType, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 10000,
  })
  balance!: number
}
