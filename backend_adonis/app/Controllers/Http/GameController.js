'use strict'

const Game = use('App/models/Game');

class GameController {

  async index ({  response }) {
    let games = await Game.getGames()
    response.json(games)
  }

  async store ({ request, response }) {
    const { title, description, image, created_at } = request.all()


    let gameInfo = { title, description, image, created_at }

    console.log(gameInfo)


    let game = await Game.storeGame(gameInfo)

    return response.json(game)
  }

  async show ({ params, response }) {
    let game = await Game.showGame(params.id)
    return response.json(game)
  }

  async update ({ params, request, response }) {
    const { title, descrption, image, created_at } = request.all()

    let lastGame = await Game.showGame(params.id)
    let gameInfo = { title, descrption, image, created_at }

    let gameUpdate = await Game.UpdateGame(lastGame, gameInfo)

    return response.json(gameUpdate)
  }


  async destroy ({ params, response }) {
    let game = await Game.showGame(params.id)
    await Game.deleteGame(game)
    return response.json({ borrar: 'Datos eliminados con exito'})
  }
}

module.exports = GameController
