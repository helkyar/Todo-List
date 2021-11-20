import React, { Component } from 'react';

export class Score extends Component {
  // Hay que levantar el estado para actualizar el score
  render() {
   const {done, total} = this.props;
    return (
      <>
        <h1>Tareas realizadas {done}/{total}</h1>
      </>
    );
  }
}

export default Score;
