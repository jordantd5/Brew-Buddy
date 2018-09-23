import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, me} from '../store'
import TempDrawer from './TempDrawer'

//material ui
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  img: {
    height: 50,
    marginRight: 20
  }
}

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      showMenu: false
    }
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.props.getUser()
  }

  onClick() {
    this.setState({
      showMenu: true
    })
    setTimeout(() => {
      this.setState({showMenu: false})
    }, 3000)
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {this.state.showMenu ? <TempDrawer userId={this.props.userId} /> : null}
        <nav>
          {this.props.isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={this.onClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <img src="hop.png" className={classes.img} />

                  <Typography
                    variant="title"
                    color="inherit"
                    className={classes.grow}
                  >
                    BREW BUDDY
                  </Typography>
                  <Link to="/home">Home</Link>
                  <a href="#" onClick={this.props.handleClick}>
                    Logout
                  </a>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </div>
          ) : (
            <div className={classes.root}>
              {/* The navbar will show these links before you log in */}

              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={this.onClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <img src="hop.png" className={classes.img} />
                  <Typography
                    variant="title"
                    color="inherit"
                    className={classes.grow}
                  >
                    BREW BUDDY
                  </Typography>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </Toolbar>
              </AppBar>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me()),
    handleClick() {
      dispatch(logout())
    }
  }
}

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Navbar))
