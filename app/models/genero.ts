import { DateTime } from 'luxon'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Filme from './filme.js'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare genero: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Filme)
  declare filmes: ManyToMany<typeof Filme>
}
