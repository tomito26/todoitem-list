import React from 'react'
import TodoItem from './TodoItem';
import './todolist.css'
import todosData from '../TodoData'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todosData:todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState((prevState)=>{
      const updatedTodo = prevState.todosData.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todo:updatedTodo
      }
    })
  }
  render(){
    const todoComponents = this.state.todosData.map(item=> <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className='todo-list'>
        <h1>Todo List</h1>
        {todoComponents}
      </div>
    );
  }
}

export default App