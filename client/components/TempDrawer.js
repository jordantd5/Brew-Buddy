import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//maerial ui
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

const styles = {
  list: {
    width: 250
  }
}

class TemporaryDrawer extends React.Component {
  constructor() {
    super()
    this.state = {
      left: true
    }
  }
  toggleDrawer = () => () => {
    this.setState({
      left: false
    })
  }

  render() {
    const {classes} = this.props
    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/brews">
            <h2>ALL BREWS</h2>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={`/mybrews/${this.props.userId}`}>
            <h2>MY BREWS</h2>
          </Link>
        </List>
      </div>
    )

    return (
      <div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TemporaryDrawer)
