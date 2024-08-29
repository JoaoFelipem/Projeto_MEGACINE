import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesSalaProvider = new SimpleMessagesProvider({
  'required': 'O campo {{ field }} é obrigatório',
  'minLength': 'O campo {{ field }} deve ter pelo menos {{ min }} caracteres',
  'withoutDecimals': 'O campo {{ field }} deve ser inteiro',
  'min': 'O campo {{ field }} deve ser no mínimo {{ min }}',

  'quantidadeFileiras.min': 'A quantidade mínima de fileiras é 1',
  'quantidadeColunas.min': 'A quantidade mínima de colunas é 1',
  'quantidadeFileiras.max': 'A quantidade máxima de fileiras permitidas é 26',
  'quantidadeColunas.max': 'A quantidade máxima de colunas permitidas é 26',
})

export const createSalaValidator = vine.compile(
  vine.object({
    nome: vine.string().minLength(3),
    quantidadeFileiras: vine.number().min(1).max(26).withoutDecimals(),
    quantidadeColunas: vine.number().min(1).max(26).withoutDecimals(),
  })
)
