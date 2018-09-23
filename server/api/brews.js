const router = require('express').Router()
const {Recipe, IngInRecipe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll()
    res.json(recipes)
  } catch (err) {
    next(err)
  }
})

router.get('/:recipeId', async (req, res, next) => {
  try {
    const ing = await IngInRecipe.findAll({
      where: {
        recipeId: req.params.recipeId
      }
    })
    res.json(ing)
  } catch (err) {
    next(err)
  }
})
