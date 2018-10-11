'use strict'

const db = require('../server/db')

const {
  User,
  Recipe,
  Type,
  Ingredient,
  IngInRecipe
} = require('../server/db/models')

const users = [
  {name: 'Grace Hopper', email: 'gh@email.com', password: 'hi'},
  {name: 'John Doe', email: 'jd@email.com', password: 'hi'}
]

const recipes = [
  {
    name: 'Chocolate Peanut Butter Oatmeal Stout',
    image: 'full-01.png',
    url:
      'https://www.brewersfriend.com/homebrew/recipe/view/109747/chocolate-peanut-butter-oatmeal-stout',
    batchSize: 5.5,
    OG: 1.07,
    FG: 1.02,
    ABV: 6.39,
    temp: 20
    //typeId: 1
  },
  {
    name: 'Bavarian Hefeweizen',
    image: 'full-01.png',
    url:
      'https://www.brewersfriend.com/homebrew/recipe/view/9004/bavarian-hefeweizen',
    batchSize: 5.25,
    OG: 1.044,
    FG: 1.011,
    ABV: 4.45,
    temp: 16.67
    //typeId: 2
  }
]

const types = [
  {
    name: 'Oatmeal Stout'
  },
  {
    name: 'Weissbier'
  }
]

const ingredients = [
  {name: 'United Kingdom - Maris Otter Pale'},
  {name: 'Flaked Oats'},
  {name: 'American - Victory'},
  {name: 'American - Chocolate'},
  {name: 'United Kingdom - Chocolate'},
  {name: 'American - Roasted Barley'},
  {name: 'American - Caramel/Crystal'},
  {name: 'Rice Hulls'},
  {name: 'Warrior Hops'},
  {name: 'PB2 Peanut Butter Powder'},
  {name: 'Cocoa Nibs'},
  {name: 'British Ale Yeast WLP005'},
  {name: 'German - Pilsner'},
  {name: 'American - Red Wheat'},
  {name: 'American - Carapils'},
  {name: 'Hersbrucker'},
  {name: 'Calcium Chloride'},
  {name: 'BrewVint Yeast Nutrient'},
  {name: 'Weihenstephan Weizen 3068'}
]

const ingInRecipes = [
  {
    quantity: '9 lbs',
    recipeId: 1,
    ingredientId: 1
  },
  {
    quantity: '3 lbs',
    recipeId: 1,
    ingredientId: 2
  },
  {
    quantity: '1 lbs',
    recipeId: 1,
    ingredientId: 3
  },
  {
    quantity: '0.6 lbs',
    recipeId: 1,
    ingredientId: 4
  },
  {
    quantity: '0.6 lbs',
    recipeId: 1,
    ingredientId: 5
  },
  {
    quantity: '0.4 lbs',
    recipeId: 1,
    ingredientId: 6
  },
  {
    quantity: '0.5 lbs',
    recipeId: 1,
    ingredientId: 7
  },
  {
    quantity: '1 lbs',
    recipeId: 1,
    ingredientId: 8
  },
  {
    quantity: '0.5 oz',
    recipeId: 1,
    ingredientId: 9
  },
  {
    quantity: '6.5 oz',
    recipeId: 1,
    ingredientId: 10
  },
  {
    quantity: '6 oz',
    recipeId: 1,
    ingredientId: 11
  },
  {
    quantity: '1',
    recipeId: 1,
    ingredientId: 12
  },
  {
    quantity: '4.5 lbs',
    recipeId: 2,
    ingredientId: 13
  },
  {
    quantity: '4.5 lbs',
    recipeId: 2,
    ingredientId: 14
  },
  {
    quantity: '0.5 lbs',
    recipeId: 2,
    ingredientId: 15
  },
  {
    quantity: '1.5 oz',
    recipeId: 2,
    ingredientId: 16
  },
  {
    quantity: '1 tsp',
    recipeId: 2,
    ingredientId: 17
  },
  {
    quantity: '1 tsp',
    recipeId: 2,
    ingredientId: 18
  },
  {
    quantity: '1',
    recipeId: 2,
    ingredientId: 19
  }
]

// let createdRecipes
// let createdUsers

function seed() {
  return Promise.all(users.map(user => User.create(user)))
    .then(() => {
      //createdUsers = newUsers
      Promise.all(recipes.map(recipe => Recipe.create(recipe)))
    })
    .then(() => {
      //createdRecipes = newRecipes
      Promise.all(types.map(type => Type.create(type)))
      // const newOne = createdRecipes[0].addUsers(createdUsers[0])
      // const newTwo = createdRecipes[1].addUsers(createdUsers[1])
      // return newOne, newTwo
    })
    .then(() => Promise.all(ingredients.map(ing => Ingredient.create(ing))))
    .then(() => Promise.all(ingInRecipes.map(ing => IngInRecipe.create(ing))))
    .catch(error => console.error(error))

  // await db.sync({force: true})
  // console.log('db synced!')

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  await db.sync({force: true})
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
