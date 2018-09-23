import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getRecipes} from '../store/brews'
import IndBrew from './IndBrew'

class AllBrews extends React.Component {
  componentDidMount() {
    this.props.getRecipes()
  }
  render() {
    const recipes = this.props.recipes
    return recipes
      ? recipes.map(recipe => {
          return <IndBrew key={recipe.id} recipe={recipe} />
        })
      : null
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.brews.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipes: () => dispatch(getRecipes())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AllBrews)
)
