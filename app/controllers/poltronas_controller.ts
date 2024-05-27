import type { HttpContext } from '@adonisjs/core/http'
import Poltrona from '#models/poltrona'

export default class PoltronasController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const poltrona = await Poltrona.create({
      fileira: 1,
      coluna: 1,
      posicao: String.fromCharCode(65) + 1,
    })
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