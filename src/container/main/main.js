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

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      columns : [setColumn('dummy')]
    }
  }


  handleAddItem = (toColumnIndex) => {
    const item = window.prompt('Enter item description')
    if (!item.length) return
    this.setState(prevState => {
      const data = [...prevState.columns[toColumnIndex].data, setItem(item)]
      const columns = prevState.columns.map(
        (obj, i) => {
          if (i === toColumnIndex) obj.data = data
          return obj
        }
      )
      return { columns }
    })
  }

  handleAddColumn = () => {
    const column = window.prompt('Enter column title')
    if (!column.length) return
    this.setState(prevState => ({ columns : [...prevState.columns, setColumn(column)] }))
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
        <div className='kanban-column add' onClick={this.handleAddColumn}>
          click here to add a column
        </div>
        </div>
      </div>
    )
  }
}

export default Main
