import React from "react";

class ButtonNext extends React.Component {
  handleClickButtonNext = () => {
    this.props.onClickButtonNext();
  };

  render() {
    return (
      this.props.hasNext && (
        <button onClick={this.handleClickButtonNext}>next</button>
      )
    );
  }
}

export default ButtonNext;
