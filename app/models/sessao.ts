import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import Filme from './filme.js'
import Sala from './sala.js'
import Poltrona from './poltrona.js'

export default class Sessao extends BaseModel {
  static table = 'sessoes'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dataSessao: Date

  @column()
  declare horarioInicio: string

  @column()
  declare horarioFim: string

  @column()
  declare filmeId: number

  @belongsTo(() => Filme)
  declare filme: BelongsTo<typeof Filme>

  @column()
  declare salaId: number

  @belongsTo(() => Sala)
  declare sala: BelongsTo<typeof Sala>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Poltrona, {
    pivotTable: 'sessoes_poltronas',
    pivotColumns: ['disponivel'],
  })
  declare poltronas: ManyToMany<typeof Poltrona>
}