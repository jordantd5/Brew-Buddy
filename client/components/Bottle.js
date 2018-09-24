import React from 'react'
import {gettingStarted} from '../store/brews'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class Bottle extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.getStarted(this.props.user.id, 'carbonating!')
    this.props.history.push(`/mybrews/${this.props.user.id}/carbonating`)
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <div>
          <center>
            <h1>{this.props.recipe.name}</h1>
            <h2>status: ready to bottle!</h2>
          </center>
          <img src="/mid-01.png" height="500" />
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            onClick={this.handleSubmit}
          >
            DONE BOTTLING!
          </Button>
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

Bottle.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Bottle))
)
