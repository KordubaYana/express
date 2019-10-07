import React from "react";

class FormItem extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit();
  };

  handleChangeComment = e => {
    const comment = e.target.value;
    this.props.onChangeComment(comment);
  };

  handleChangeName = e => {
    const name = e.target.value;
    this.props.onChangeName(name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="Name" onChange={this.handleChangeName} />
        <textarea className="Comment" onChange={this.handleChangeComment} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormItem;
