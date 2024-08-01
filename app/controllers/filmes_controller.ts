import Filme from '#models/filme'
import type { HttpContext } from '@adonisjs/core/http'

export default class FilmesController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const filmes = await Filme.all()

    return view.render('pages/filmes/index', { filmes })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/filmes/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const filme = await Filme.create({
      titulo: request.input('titulo'),
      sinopse: request.input('sinopse'),
      duracao: request.input('duracao'),
      classificao_indicativa: request.input('classificao_indicativa'),
      direcao: request.input('direcao'),
      roteiro: request.input('roteiro'),
      elenco: request.input('elenco'),
      data_estreia: request.input('data_estreia'),
      data_termino: request.input('data_termino'),
      capa: request.input('capa'),
    })
    /*for (let f = 0; f < request.input('quantidadeFileiras'); f++) {
      for (let c = 0; c < request.input('quantidadeColunas'); c++) {
        const poltrona = await Poltrona.create({
          fileira: f + 1,
          coluna: c + 1,
          posicao: String.fromCharCode(65 + f) + c + 1,
        })
      }
    }*/
    return response.redirect().toRoute('salas.index')
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