import React from 'react'
import PropTypes from 'prop-types'
import Item from '../item/item'
import './column.css'

export default class Column extends React.PureComponent {
  handleOnDrop = (e, targetCol) => {
    e.preventDefault()
    const data = JSON.parse(e.dataTransfer.getData("text/plain"))
    if (data.originCol !== targetCol){
      this.props.handleDragDropItem(data, data.originCol, targetCol)
    }
  }
  render(){
    const {
      i,
      title,
      data,
      handleAddItem
    } = this.props
    return(
      <div
        className='k-column'
        onDrop={(e)=>this.handleOnDrop(e, i)}
        onDragOver={e=>e.preventDefault()}>
        <h2>{title}</h2>
        {
          data &&
          data.map((itemProps, index) => {
            itemProps.originCol = i
            return <Item key={index} {...itemProps} />
          })
        }
        <div onClick={() => handleAddItem(i)} >+ ADD ITEM</div>
      </div>
    )
  }
}

Column.propTypes = {
  title : PropTypes.string.isRequired,
  data : PropTypes.array.isRequired,
  handleAddItem : PropTypes.func.isRequired,
  i : PropTypes.number.isRequired
}
