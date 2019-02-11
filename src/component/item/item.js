import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

export default class Item extends React.PureComponent {
  render(){
    const { description, isCompleted } = this.props
    return(
      <div className='k-item row'>
        <div className='col-10'>{description}</div>
      </div>
    )
  }
}

Item.prototypes = {
  isCompleted : PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}
