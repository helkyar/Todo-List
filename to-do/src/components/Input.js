import React, { Component } from 'react';

export class Input extends Component {
  
  constructor(props){
    super(props);

    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    //Pasar "this.state.value" al componente lista
    this.props.onChange(this.state.value);
    this.setState({value:''})
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  render() {
   
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="+" />
      </form>
    );
  }
}

export default Input;