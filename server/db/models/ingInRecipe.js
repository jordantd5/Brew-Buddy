const Sequelize = require('sequelize')
const db = require('../db')

const IngInRecipe = db.define('ingInRecipe', {
  quantity: {
    type: Sequelize.STRING
  }
})

module.exports = IngInRecipe
