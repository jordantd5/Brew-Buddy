const User = require('./user')
const Recipe = require('./recipe')
const Type = require('./type')
const Ingredient = require('./ingredient')
const IngInRecipe = require('./ingInRecipe')

User.hasOne(Recipe, {through: 'CurRecipes'})
Recipe.belongsToMany(User, {through: 'CurRecipes'})

Recipe.belongsTo(Type)
Type.hasMany(Recipe)

Recipe.belongsToMany(Ingredient, {through: IngInRecipe})
Ingredient.belongsToMany(Recipe, {through: IngInRecipe})

module.exports = {
  User,
  Recipe,
  Type,
  Ingredient,
  IngInRecipe
}
