import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {me} from '../store/user'
import Empty from './Empty'
import sensor from '../../temp'

class Progress extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getUser(Number(this.props.match.params.userId))
  }
  render() {
    console.log('TEMP', sensor)
    const recipe = this.props.recipe
    const ing = this.props.ing
    const status = this.props.user.status
    if (status === 'just getting started!') {
      return <Empty recipe={recipe} ing={ing} />
    }
    // if (status = 'fermenting!')
    // if (status = 'ready to bottle!')
    // if (status = 'carbonating!')
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: userId => dispatch(me(userId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Progress)
)
