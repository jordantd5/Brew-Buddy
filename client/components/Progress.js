import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {me} from '../store/user'
import {getRecipesByUser} from '../store/brews'
import Empty from './Empty'
import Fermenting from './Fermenting'
import Bottle from './Bottle'
import Carbonate from './Carbonate'
import Ready from './Ready'

class Progress extends React.Component {
  componentDidMount() {
    this.props.getUser(Number(this.props.match.params.userId))
    this.props.getRecipe(Number(this.props.match.params.userId))
  }
  render() {
    const status = this.props.user.status
    if (status === 'just getting started!') {
      return <Empty />
    }
    if (status === 'fermenting!') {
      return <Fermenting />
    }
    if (status === 'ready to bottle!') {
      return <Bottle />
    }
    if (status === 'carbonating!') {
      return <Carbonate />
    }
    if (status === 'drink up!') {
      return <Ready />
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    recipe: state.brews.recByUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: userId => dispatch(me(userId)),
    getRecipe: userId => dispatch(getRecipesByUser(userId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Progress)
)
