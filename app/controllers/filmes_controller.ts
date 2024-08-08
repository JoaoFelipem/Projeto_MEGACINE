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
      capa: request.input('capa'),
      sinopse: request.input('sinopse'),
      duracao: request.input('duracao'),
      classificacao_indicativa: request.input('classificacaoIndicativa'),
      direcao: request.input('direcao'),
      data_estreia: request.input('dataEstreia'),
      data_termino: request.input('dataTermino'),
    })
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