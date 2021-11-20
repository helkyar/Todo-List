import React, { Component } from 'react';
import trash from '../../img/trash.svg';

export class Todo extends Component {

  

  render() {
    const {task, id} = this.props;
    return (
      <div className="task">
        <form>
          <input id={id} type="checkbox" onChange={(e)=>this.props.check(e.target.checked)}/>
          <label htmlFor={id}>{task}</label>
        </form>

        {/* Edit functionality? */}
        <img src={trash} onClick={()=>this.props.onClick(id)}/>
      </div>
    );
  }
}

export default Todo;
