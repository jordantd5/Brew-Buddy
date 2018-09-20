import React from 'react'
import PropTypes from 'prop-types'

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
  toggleDrawer = (side, open) => () => {
    this.setState({
      left: open
    })
  }

  render() {
    const {classes} = this.props

    const sideList = (
      <div className={classes.list}>
        <List>FIRST</List>
        <Divider />
        <List>SECOND</List>
      </div>
    )

    return (
      <div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
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
