import type { HttpContext } from '@adonisjs/core/http'
import Genero from '#models/genero'

export default class GenerosController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const generos = await Genero.all()

    return view.render('pages/generos/index', { generos })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const genero = await Genero.create({
      genero: request.input('genero'),
    })
    return response.redirect().toRoute('generos.index')
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