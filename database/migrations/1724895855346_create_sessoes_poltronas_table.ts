import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sessoes_poltronas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.boolean('disponivel')
      table.integer('sessao_id').unsigned().references('sessoes.id').onDelete('CASCADE')
      table.integer('poltrona_id').unsigned().references('poltronas.id').onDelete('CASCADE')
      table.unique(['sessao_id', 'poltrona_id'])
      table.timestamp('created_at')
      table.timestamp('updated_at')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}