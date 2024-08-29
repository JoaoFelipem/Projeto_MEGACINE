/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import GenerosController from '#controllers/generos_controller'
import SalasController from '#controllers/salas_controller'
import PoltronasController from '#controllers/poltronas_controller'
import FilmesController from '#controllers/filmes_controller'
import SessoesController from '#controllers/sessoes_controller'

router.on('/').render('pages/home')
router.on('/autor').render('pages/autor')
router.resource('generos', GenerosController)
router.resource('salas', SalasController)
router.resource('poltronas', PoltronasController)
router.resource('filmes', FilmesController)
router.resource('sessoes', SessoesController)
