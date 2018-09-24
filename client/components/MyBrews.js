import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getRecipesByUser, getIngredients} from '../store/brews'
import Progress from './Progress'

class MyBrews extends React.Component {
  async componentDidMount() {
    await this.props.getRecByUser(Number(this.props.match.params.userId))
    //await this.props.getIng(this.props.recByUser.id)
  }
  render() {
    const recipe = this.props.recByUser
    //const ingredients = this.props.ingredients
    return recipe ? <Progress key={recipe.id} recipe={recipe} /> : null
  }
}

const mapStateToProps = state => {
  return {
    recByUser: state.brews.recByUser,
    ingredients: state.brews.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecByUser: userId => dispatch(getRecipesByUser(userId)),
    getIng: recipeId => dispatch(getIngredients(recipeId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyBrews))
