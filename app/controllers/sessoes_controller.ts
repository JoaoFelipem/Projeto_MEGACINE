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
  async store({ request }: HttpContext) {}

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