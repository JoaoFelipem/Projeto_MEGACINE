import type { HttpContext } from '@adonisjs/core/http'
import Sessao from '#models/sessao'
import Filme from '#models/filme'
import Sala from '#models/sala'
import Poltrona from '#models/poltrona'

export default class SessoesController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    return view.render('pages/sessoes/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    const filmes = await Filme.all()
    const salas = await Sala.all()

    return view.render('pages/sessoes/create', { filmes, salas })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    let idSala = request.input('sala')
    const sessao = await Sessao.create({
      dataSessao: request.input('DataSessao'),
      horarioInicio: request.input('horarioInicio'),
      horarioFim: '20:40',
      filmeId: request.input('filme'),
      salaId: idSala,
    })

    //Retorna um json com o id das poltronas filtradas pelo id da sala e outras bobagens
    const poltronas = await Poltrona.query().where('salaId', idSala).select('id')
    //Transforma o json em um array somente com os ids das poltronas filtradas
    const poltronasIds = poltronas.map((poltrona) => poltrona.id)
    console.log(poltronasIds)

    if (poltronasIds && poltronasIds.length > 0) {
      //Laço para definir cada sessao_poltrona como true
      for (const poltronaId of poltronasIds) {
        await sessao.related('poltronas').attach({
          [poltronaId]: {
            disponivel: true,
          },
        })
      }
    }

    return response.redirect().toRoute('sessoes.index')

    //Nota mental: Na página de vendas terá as checkbox representando as poltronas, quando enviar o formulário terá que pegar o array com os ids das poltronas e ir na tabela sessoes_poltronas e alterar o valor do campo 'disponivel' e depois salvar.
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