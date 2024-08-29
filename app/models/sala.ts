import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Poltrona from './poltrona.js'

export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare capacidade: number

  @column()
  declare quantidadeFileiras: number

  @column()
  declare quantidadeColunas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Poltrona)
  declare poltronas: HasMany<typeof Poltrona>
}
