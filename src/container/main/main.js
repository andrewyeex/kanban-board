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

export const setColumn = title => ({
  title,
  data : [
    {
      isCompleted : false,
      description : 'Description'
    }
  ]
})

export const setItem = description => ({
  isCompleted : false,
  description
})

export const addDraggableListenersTo = (target, handleDragged, handleDropped) => {
  let dragged = target
  target.addEventListener("dragover", function( event ) { event.preventDefault() }, false)
  target.addEventListener("dragend",  function( event ) { event.target.style.opacity = '' }, false)
  target.addEventListener("drop", function( event ) {
    event.preventDefault()
    handleDropped(dragged.dataset.switch)
  }, false)
  target.addEventListener("dragstart", function( event ) {
      dragged = target
      event.target.style.opacity = .5
      handleDragged(dragged.dataset.switch)
  }, false)
}

class Main extends Component {
  constructor(props){
    super(props)
    this.state = { columns : [setColumn('dummy')] }
  }
  /**
   * Add the ability to add items into a column
   * @param {Number} addToColumn - Index with respect to this.state.columns
   */
  handleAddItem = (addToColumn) => {
    const item = window.prompt('Enter item description')
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
   * Add the ability to add column
   */
  handleAddColumn = () => {
    const column = window.prompt('Enter column title')
    if (column) {
      this.setState(prevState => ({ columns : [...prevState.columns, setColumn(column)] }))
    }
  }

  render(){
    return(
      <div className='container-fluid'>
        <div className='row' style={{flexWrap: 'nowrap'}}>
        {
          this.state.columns.map((column, i) => {
            const {data, title} = column
            const handleAddItem = this.handleAddItem
            const props = {data, title, i, handleAddItem}
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

export default Main
