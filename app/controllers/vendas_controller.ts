import type { HttpContext } from '@adonisjs/core/http'
import Sessao from '#models/sessao'


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
  async create({ view }: HttpContext) {
    const sessoes = await Sessao.all()
    return view.render('pages/vendas/create', { sessoes })
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