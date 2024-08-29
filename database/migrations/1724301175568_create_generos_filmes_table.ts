import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'generos_filmes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('filme_id').unsigned().references('filmes.id').onDelete('CASCADE')
      table.integer('genero_id').unsigned().references('generos.id').onDelete('CASCADE')
      table.unique(['filme_id', 'genero_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}