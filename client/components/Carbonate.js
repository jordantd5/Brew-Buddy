import React from 'react'
import {gettingStarted} from '../store/brews'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Countdown from 'react-countdown-now'

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

const Finished = () => <span>ready to bottle!</span>

class Fermenting extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.getStarted(this.props.user.id, 'drink up!')
    this.props.history.push(`/mybrews/${this.props.user.id}/drink-up`)
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <div>
          <center>
            <h1>{this.props.recipe.name}</h1>
            <h2>status: carbonating</h2>
          </center>
          <img src="/mid-01.png" height="500" />
        </div>
        <div>
          <h2>time left to carbonate:</h2>
          <Countdown date={Date.now() + 1209640000}>
            <Finished />
          </Countdown>
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            onClick={this.handleSubmit}
          >
            DONE CARBONATING!
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

Fermenting.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Fermenting))
)
