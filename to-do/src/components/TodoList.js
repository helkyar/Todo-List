import React, { Component } from 'react';
import Todo from './subcomponent/Todo';

export class TodoList extends Component {
  constructor(props){
    super(props);

    this.state = {tasks: this.props.tasks};
  }

componentWillReceiveProps(nextProps) {
    this.setState({ tasks: nextProps.tasks });  
}

render() {
    return (
        <div className="tasks">
            {this.state.tasks.map((task, id)=><Todo key={id} id={id} task={task} onClick={this.props.onClick} check={this.props.check}/>)}
        </div>
    );
}
}

export default TodoList;
