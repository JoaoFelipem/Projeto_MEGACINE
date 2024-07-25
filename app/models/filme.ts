import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
  declare classificao_indicativa: string
  
  @column()
  declare direcao: string
  
  @column()
  declare roteiro: string
  
  @column()
  declare elenco: string
  
  @column()
  declare data_estreia: Date
  
  @column()
  declare data_termino: Date
  
  @column()
  declare capa: Blob

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}