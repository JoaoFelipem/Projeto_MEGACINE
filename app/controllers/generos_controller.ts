import type { HttpContext } from '@adonisjs/core/http'
import Genero from '#models/genero'
import { createGeneroValidator, messagesGeneroProvider } from '#validators/genero'

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
  async store({ request, response, session }: HttpContext) {
    const dados = request.all()
    const dadosValidados = await createGeneroValidator.validate(dados, {
      messagesProvider: messagesGeneroProvider,
    })

    //Deixa a primeira letra do genero maiuscula
    let generoMin = dadosValidados.genero.toLowerCase()
    let generoUp = generoMin.charAt(0).toUpperCase() + generoMin.slice(1)

    const genero = await Genero.create({
      genero: generoUp,
    })

    if (genero.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Gênero ${genero.genero} cadastrado com sucesso!`,
      })
    }

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