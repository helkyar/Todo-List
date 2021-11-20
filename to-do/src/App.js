import React, { Component } from 'react';
import './css/App.css';
import Score from './components/Score';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

// Order list if slashed

class App extends Component {
  constructor(props){
    super(props)

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.check = this.check.bind(this);
    this.state = {done: 0, tasks: []}
  }

  check(cheked){
    cheked && this.setState((state)=>({...state, done: state.done + 1}));
    cheked || this.setState((state)=>({...state, done: state.done - 1}));
  }

  addTask(task){
    this.setState((state)=>({...state, tasks: [...state.tasks, task]}))
  }

  async removeTask(id){          
    let newTasks = this.state.tasks.filter((task, i)=> i!=id);
    await this.setState({tasks: newTasks});

    const inputs = await document.querySelectorAll('input[type=checkbox]');
    const cheked = [...inputs].filter((input)=>input.checked);
    cheked && this.setState((state)=>({...state, done: cheked.length}));
}

  render (){
    return (
      <>
        <Score done={this.state.done} total={this.state.tasks.length}/>
        <Input onChange={this.addTask}/>
        <TodoList onClick={this.removeTask} check={this.check} tasks={this.state.tasks}/>
        <Footer/>
      </>
    );
  }
}

export default App;
