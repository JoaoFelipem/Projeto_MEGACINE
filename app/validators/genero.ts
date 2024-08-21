import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesGeneroProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',

  'genero.minLength': 'O gênero precisa de pelo menos 4 caracteres',
})

export const createGeneroValidator = vine.compile(
  vine.object({
    genero: vine.string().minLength(4).maxLength(40),
  })
)
