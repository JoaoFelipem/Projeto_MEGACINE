import type { HttpContext } from '@adonisjs/core/http'
import Sala from '#models/sala'
import Poltrona from '#models/poltrona'
import PoltronasController from './poltronas_controller.js'
import router from '@adonisjs/core/services/router'

export default class SalasController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const salas = await Sala.all()

    return view.render('pages/salas/index', { salas })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/salas/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const sala = await Sala.create({
      nome: request.input('nome'),
      quantidadeFileiras: request.input('quantidadeFileiras'),
      quantidadeColunas: request.input('quantidadeColunas'),
      capacidade: request.input('capacidade'),
    })
    const poltrona = await Poltrona.create({
      fileira: 1,
      coluna: 1,
      posicao: String.fromCharCode(65) + 1,
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
