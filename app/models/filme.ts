import { DateTime } from 'luxon'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Genero from './genero.js'

export default class Filme extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare titulo: string
  
  @column()
  declare sinopse: string
  
  @column()
  declare duracao: number
  
  @column()
  declare classificacao_indicativa: string
  
  @column()
  declare direcao: string
  
  @column()
  declare data_estreia: Date
  
  @column()
  declare data_termino: Date
  
  @column()
  declare capa: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Genero, {
    pivotTable: 'generos_filmes',
  })
  declare generos: ManyToMany<typeof Genero>
}