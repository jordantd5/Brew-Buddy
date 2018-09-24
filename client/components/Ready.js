import React from 'react'
import {gettingStarted} from '../store/brews'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Ready extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          <center>
            <h1>{this.props.recipe.name}</h1>
            <h2>status: ready to enjoy!</h2>
            <img src="/full-01.png" height="500" />
          </center>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    recipe: state.brews.recByUser,
    ing: state.brews.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStarted: (userId, status) => {
      dispatch(gettingStarted(userId, status))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ready))
