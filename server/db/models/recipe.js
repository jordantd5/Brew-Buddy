const Sequelize = require('sequelize')
const db = require('../db')

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'no-image.png'
  },
  url: {
    type: Sequelize.STRING
  },
  batchSize: {
    type: Sequelize.FLOAT
  },
  OG: {
    type: Sequelize.FLOAT
  },
  FG: {
    type: Sequelize.FLOAT
  },
  ABV: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  temp: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Recipe
