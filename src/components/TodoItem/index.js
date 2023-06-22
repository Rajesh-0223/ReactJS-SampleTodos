// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  onClickDeleteButton = () => {
    const {todoInfo, deleteTodo} = this.props
    const {id} = todoInfo
    deleteTodo(id)
  }

  render() {
    const {todoInfo} = this.props
    const {title} = todoInfo

    return (
      <li className="todo-item">
        <p className="todo-item-title">{title}</p>
        <button
          type="button"
          className="delete-button"
          onClick={this.onClickDeleteButton}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
