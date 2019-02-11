import React from 'react'
import PropTypes from 'prop-types'

export default class Item extends React.PureComponent {
  render(){
    const { description, isCompleted } = this.props
    return(
      <div className='row'>
        <div className='col-1' >{isCompleted ? 'x' : '-'}</div>
        <div className='col-10'>{description}</div>
        <div className='col-1' ></div>
      </div>
    )
  }
}

Item.prototypes = {
  isCompleted : PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}
