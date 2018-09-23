const router = require('express').Router()
const {Recipe} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const recipe = await Recipe.findOne({
      where: {
        userId: req.params.userId
      }
    })
    res.json(recipe)
  } catch (err) {
    next(err)
  }
})
