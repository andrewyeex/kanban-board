/***
 *
 * Title: Main JS
 * Owner: Andrew Yee
 * Date Created:
 * Jira #:
 * Description: Main container for the application.
 *
 **/

import React, { Component } from 'react'
import Column from '../../component/column/column'
import {columnData} from '../../fixture/columns'
import { setColumn, setItem } from '../../utils/utils'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      columns : columnData
    }
  }
  /**
   * Add the ability to add items into a column
   * @param {Number} addToColumn - Index with respect to this.state.columns
   */
  handleAddItem = (item, addToColumn) => {
    item = item ? item.description : window.prompt('Enter item description')
    if (item) {
      this.setState(prevState => {
        const data = [...prevState.columns[addToColumn].data, setItem(item)]
        const columns = prevState.columns.map(
          (obj, i) => {
            if (i === addToColumn) obj.data = data
            return obj
          }
        )
        return { columns }
      })
    }
  }
  /**
   * Remove items from a column
   * @param {Number} removeFromColumn - Index with respect to this.state.columns
   */
  handleRemoveItem = (item, removeFromColumn) => {
    if (item) {
      this.setState(prevState => {
        const data = prevState.columns[removeFromColumn].data.filter( i => i.id !== item.id )
        const columns = prevState.columns.map(
          (obj, i) => {
            if (i === removeFromColumn) obj.data = data
            return obj
          }
        )
        return { columns }
      })
    }
  }
  /**
   * Add the ability to add column
   */
  handleAddColumn = () => {
    const column = window.prompt('Enter column title')
    if (column) {
      this.setState(prevState => ({ columns : [...prevState.columns, setColumn(column)] }))
    }
  }
  /**
   * Remove the item from the origin column
   * Add the item to the targeted column it was dropped on
   * @param {Object} item
   * @param {Number} originCol
   * @param {Number} targetCol
   */
  handleDragDropItem = (item, originCol, targetCol) => {
    this.handleRemoveItem(item, originCol)
    this.handleAddItem(item, targetCol)
  }
  render(){
    return(
      <div className='container-fluid'>
        <div className='row' style={{flexWrap: 'nowrap'}}>
          {
            this.state.columns &&
            this.state.columns.map((column, i) => {
              const props = {
                i,
                data : column.data,
                title : column.title,
                handleAddItem : this.handleAddItem,
                handleDragDropItem : this.handleDragDropItem
              }
              return < Column key={i} {...props} />
            })
          }
          <div className='k-column add' onClick={this.handleAddColumn}>
            click here to add a column
          </div>
        </div>
      </div>
    )
  }
}
