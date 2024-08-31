import Filme from '#models/filme'
import Genero from '#models/genero'
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
    const generos = await Genero.all()

    return view.render('pages/filmes/create', { generos })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    
    const filme = await Filme.create({
      titulo: request.input('titulo'),
      capa: request.input('capa'),
      sinopse: request.input('sinopse'),
      duracao: request.input('duracao'),
      classificacaoIndicativa: request.input('classificacaoIndicativa'),
      direcao: request.input('direcao'),
      dataEstreia: request.input('dataEstreia'),
      dataTermino: request.input('dataTermino'),
    })

    const listaGeneros = request.input('generos')

    if (listaGeneros && listaGeneros.length > 0){
      await filme.related('generos').attach(listaGeneros)
    }

    return response.redirect().toRoute('filmes.index')
  }
  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const filme = await Filme.find(params.id)

    return view.render('pages/filmes/info', { filme })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const filme = await Filme.find(params.id)
    const generos = await Genero.all()

    return view.render('pages/filmes/create', { filme, generos })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}