import React from "react";
import FormItem from "./FormItem";
import GetCommentsContainer from "./GetCommentsContainer";
import PostCommentsContainer from "./PostCommentsContainer";
import Utils from "../Utils";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      comment: "",
      date: "",
      id: 0,
      submit: false,
      data: {}
    };
  }
  changeSubmit = () => {
    this.setState({ submit: false });
  };

  getId = id => {
    console.log(id);
    this.setState({ id });
  };

  onSubmit = () => {
    const data = {
      user: this.state.user,
      comment: this.state.comment,
      date: Utils.getDateTime(),
      id: this.state.id
    };
    this.setState({ submit: true, data });
  };

  onChangeComment = comment => {
    this.setState({ comment, submit: false });
  };

  onChangeName = user => {
    this.setState({ user, submit: false });
  };

  render() {
    return (
      <>
        <FormItem
          onChangeComment={this.onChangeComment}
          onChangeName={this.onChangeName}
          onSubmit={this.onSubmit}
        />
        {!this.state.submit && (
          <GetCommentsContainer name={this.props.name} getId={this.getId} />
        )}
        {this.state.submit && (
          <PostCommentsContainer
            data={this.state.data}
            name={this.props.name}
            changeSubmit={this.changeSubmit}
          />
        )}
      </>
    );
  }
}

export default Form;
