import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

export default class Item extends React.PureComponent {
  handleOnDrag = (e, obj) => e.dataTransfer.setData("text/plain", JSON.stringify(obj))
  render(){
    const { description } = this.props
    return(
      <div
        draggable
        className='k-item row'
        onDragStart={(e)=>this.handleOnDrag(e,this.props)}>
        <div className='col-10'>{description}</div>
      </div>
    )
  }
}

Item.prototypes = {
  description: PropTypes.string.isRequired
}
