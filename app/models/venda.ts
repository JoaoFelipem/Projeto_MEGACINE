import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Sessao from './sessao.js'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dataVenda: Date

  @column()
  declare quantIngMeia: number

  @column()
  declare valorMeia: number

  @column()
  declare quantIngInt: number

  @column()
  declare valorInt: number

  @column()
  declare valorTotal: number

  @column()
  declare poltronasVendidas: string

  @column()
  declare sessaoId: number

  @belongsTo(() => Sessao)
  declare sessao: BelongsTo<typeof Sessao>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}