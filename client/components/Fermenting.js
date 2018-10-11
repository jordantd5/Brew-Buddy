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
    this.props.getStarted(this.props.user.id, 'ready to bottle!')
    this.props.history.push(`/mybrews/${this.props.user.id}/ready-to-bottle`)
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <div>
          <center>
            <h1>{this.props.recipe.name}</h1>
            <h2>status: fermenting!</h2>
          </center>
        </div>
        <div id="wrapper">
          <div id="leftcolumn">
            <img src="/mid-01.png" height="500" />
          </div>
          <div id="rightcolumn">
            <h2>time left to ferment:</h2>
            <Countdown date={Date.now() + 1209640000}>
              <Finished />
            </Countdown>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
              onClick={this.handleSubmit}
            >
              START BOTTLING!
            </Button>
          </div>
          <div>
            <iframe
              width="400"
              height="280"
              allowtransparency="true"
              scrolling="no"
              frameBorder="no"
              src="https://widgets.wia.io/embed/wgt_gnxQofv5/dev_QPY0ZvNd"
            />
          </div>
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
