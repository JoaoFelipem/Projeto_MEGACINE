import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('data_venda')
      table.integer('sessao_id').unsigned().references('sessoes.id').onDelete('CASCADE')
      table.integer('quant_ing_meia')
      table.decimal('valor_meia')
      table.integer('quant_ing_int')
      table.decimal('valor_int')
      table.decimal('valor_total')
      table.text('poltronas_vendidas')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      //falta a chave estrangeira
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}