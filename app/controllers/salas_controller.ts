import type { HttpContext } from '@adonisjs/core/http'
import Sala from '#models/sala'
import Poltrona from '#models/poltrona'
import router from '@adonisjs/core/services/router'
import { createSalaValidator, messagesSalaProvider } from '#validators/sala'

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
    const dados = request.all()
    const dadosValidados = await createSalaValidator.validate(dados, {
      messagesProvider: messagesSalaProvider,
    })

    const sala = await Sala.create({
      nome: dadosValidados.nome,
      quantidadeFileiras: dadosValidados.quantidadeFileiras,
      quantidadeColunas: dadosValidados.quantidadeColunas,
      capacidade: dadosValidados.capacidade,
    })
    /*const poltrona = await Poltrona.create({
      fileira: 1,
      coluna: 1,
      posicao: String.fromCharCode(65) + 1,
    })*/
    for (let f = 0; f < request.input('quantidadeFileiras'); f++) {
      for (let c = 0; c < request.input('quantidadeColunas'); c++) {
        const poltrona = await Poltrona.createMany([
          {
            fileira: f + 1,
            coluna: c + 1,
            posicao: String.fromCharCode(65 + f) + c + 1,
          },
        ])
      }
    }

    if (sala.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `${sala.nome} cadastrada com sucesso!`,
      })
    }

    return response.redirect().toRoute('salas.index')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const sala = await Sala.find(params.id)

    return view.render('pages/salas/create', { sala })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const sala = await Sala.find(params.id)

    if (!sala) {
      session.flash('notificacao', {
        type: 'danger',
        message: `Sala informada não encontrada!`,
      })
    }

    const dados = await createSalaValidator.validate(request.all(), {
      messagesProvider: messagesSalaProvider,
    })

    await sala?.merge(dados).save()

    if (sala?.$isPersisted) {
      session.flash('notificacao', {
        type: 'warning',
        message: `${sala.nome} atualizada com sucesso`,
      })
    }

    return response.redirect().toRoute('salas.index')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const sala = await Sala.find(params.id)

    await sala?.delete()

    if (sala?.$isDeleted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Sala excluída com sucesso!`,
      })
    }

    return response.redirect().toRoute('salas.index')
  }
}
