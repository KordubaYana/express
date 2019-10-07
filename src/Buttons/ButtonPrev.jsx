import React from "react";

class ButtonPrev extends React.Component {
  handleClickButtonPrev = () => {
    this.props.onClickButtonPrev();
  };

  render() {
    return (
      this.props.hasPrev && (
        <button onClick={this.handleClickButtonPrev}>prev</button>
      )
    );
  }
}

export default ButtonPrev;
