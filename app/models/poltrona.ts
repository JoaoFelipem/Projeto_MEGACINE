import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, manyToMany, belongsTo } from '@adonisjs/lucid/orm'
import Sessao from './sessao.js'
import Sala from './sala.js'

export default class Poltrona extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //Tabela da fk
  @column()
  declare salaId: number

  //Ajuste no model para fk
  @belongsTo(() => Sala)
  declare sala: BelongsTo<typeof Sala>

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

  @manyToMany(() => Sessao, {
    pivotTable: 'sessoes_poltronas',
    pivotColumns: ['disponivel'],
  })
  declare sessoes: ManyToMany<typeof Sessao>
}
