import React from 'react'
import PropTypes from 'prop-types'
import Item from '../item/item'
import './column.css'

export default class Column extends React.PureComponent {
  render(){
    const { title, data, handleAddItem, i } = this.props
    return(
      <div className='kanban-column'>
        <div>{title}</div>
        {data.map((itemProps, i) => <Item key={i} {...itemProps} />)}
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
