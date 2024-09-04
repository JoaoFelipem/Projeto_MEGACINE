import type { HttpContext } from '@adonisjs/core/http'
import Sessao from '#models/sessao'
import Venda from '#models/venda'
import Poltrona from '#models/poltrona'


export default class VendasController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    return view.render('pages/vendas/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ view, request }: HttpContext) {
    const sessoes = await Sessao.all()
    return view.render('pages/vendas/create', { sessoes })
  }

  async chairSelect({ view, params, request }: HttpContext){
    const venda = await Venda.find(params.id)
    await venda?.load('sessao')

    let sessao = venda?.sessao
    let poltronas = await Sessao.query().where('id', sessao!.id).preload('poltronas', (poltronaQuery) => { poltronaQuery.pivotColumns(['disponivel']) }).firstOrFail()
    

    return view.render('pages/vendas/chair-select', { venda, poltronas })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const dados = request.all();
    const sessao = await Sessao.find(dados.sessao)

    const venda = await Venda.create({
      dataVenda: dados.dataVenda,
      quantIngInt: dados.dataFinal,
      quantIngMeia: request.input('inputMeia'),
      sessaoId: sessao.id,
      valorInt: request.input('totalInt'),
      valorMeia: request.input('totalMeia'),
      valorTotal: request.input('totalVenda')
    })

    await venda.related('sessao').associate(sessao!)

    if (venda.$isPersisted) {
      return response.redirect().toRoute('vendas.chairSelect', { id: venda.id })
    }

  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}