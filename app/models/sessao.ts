import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import Filme from './filme.js'
import Sala from './sala.js'
import Poltrona from './poltrona.js'

export default class Sessao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare data_sessao: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Filme)
  declare filme: BelongsTo<typeof Filme>

  @belongsTo(() => Sala)
  declare sala: BelongsTo<typeof Sala>

  @manyToMany(() => Poltrona)
  declare poltronas: ManyToMany<typeof Poltrona>
}