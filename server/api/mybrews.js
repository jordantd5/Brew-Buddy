const router = require('express').Router()
const {Recipe, User} = require('../db/models')
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

router.put('/progress', async (req, res, next) => {
  try {
    const user = await User.update(
      {
        status: req.body.status
      },
      {
        where: {id: req.body.userId},
        returning: true,
        plain: true
      }
    )
    res.send(user)
  } catch (err) {
    next(err)
  }
})
