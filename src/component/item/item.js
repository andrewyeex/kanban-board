import React from 'react'
import PropTypes from 'prop-types'
import { handleOnDrag } from '../../utils/utils'
import './item.css'

export default class Item extends React.PureComponent {
  render(){
    return(
      <div
        draggable
        className='k-item row'
        onDragStart={(e)=>handleOnDrag(e,this.props)}>
        <div className='col-10'>{this.props.description}</div>
      </div>
    )
  }
}

Item.prototypes = {
  description: PropTypes.string.isRequired
}
