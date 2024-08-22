import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Poltrona extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fileira: number

  @column()
  declare coluna: number

  @column()
  declare posicao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}