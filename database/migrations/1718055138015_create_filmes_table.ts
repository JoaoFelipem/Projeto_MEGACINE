import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'filmes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo')
      table.text('sinopse', 'mediumtext')
      table.integer('duracao')
      table.string('classificacao_indicativa')
      table.string('direcao')
      table.date('data_estreia')
      table.date('data_termino')
      table.text('capa', 'longtext')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}