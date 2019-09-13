'use strict'

const Model = use('Model')

class Game extends Model {
    static get table () {
        return 'games'
    }

    static get primaryKey () {
       return 'id'
    }

    static get createdAtColumn () {
        return false
    }

    static get updatedAtColumn () {
        return false
    }

    static async getGames(){
        const games = await Game.all()
        return games
    }

    static async storeGame(gameInfo){
        let game = await Game.create(gameInfo)
        return game
    }

    static async showGame(id){
        let game = await Game.find(id)
        return game
    }

    static async UpdateGame(lastGame,gameInfo){
        lastGame.title = gameInfo.title
        lastGame.descrption = gameInfo.descrption
        lastGame.image = gameInfo.image
        lastGame.save()

        return lastGame

    }

    static async deleteGame(game){
        await game.delete()
    }

}

module.exports = Game
