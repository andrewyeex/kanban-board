import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

export default class Item extends React.PureComponent {
  handleOnDrag = (e, obj) => {
    const data = JSON.stringify(obj)
    e.dataTransfer.setData("text/plain", data)
  }
  render(){
    const { description } = this.props
    return(
      <div className='k-item row' draggable onDragStart={(e)=>this.handleOnDrag(e,this.props)} >
        <div className='col-10'>{description}</div>
      </div>
    )
  }
}

Item.prototypes = {
  isCompleted : PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}
