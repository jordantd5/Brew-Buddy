import React from 'react'
import {gettingStarted} from '../store/brews'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//material ui
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

class Empty extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.getStarted(this.props.user.id, 'fermenting!')
    this.props.history.push(`/mybrews/${this.props.user.id}/fermenting`)
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <div>
          <center>
            <h1>{this.props.recipe.name}</h1>
            <h2>status: get started!</h2>
          </center>
        </div>
        <div id="wrapper">
          <div id="leftcolumn">
            <img src="/empty-01.png" height="500" />
          </div>
          <div id="rightcolumn">
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
              onClick={this.handleSubmit}
            >
              GET STARTED!
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

Empty.propTypes = {
  classes: PropTypes.object.isRequired
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
export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Empty))
)
