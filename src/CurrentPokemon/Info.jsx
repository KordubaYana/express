import React from "react";

class Info extends React.Component {
  handleClick = () => {
    this.props.getHidden();
  };

  render() {
    return (
      <div className="inFoPokemon">
        <img src={this.props.data.sprites.front_default} alt="" />
        <h2>name: {this.props.data.name}</h2>
        <p>height: {this.props.data.height}</p>
        <p>experience: {this.props.data.base_experience}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default Info;
