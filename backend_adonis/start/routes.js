'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.resource('/games', 'GameController')
