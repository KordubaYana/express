import React from "react";

class PostCommentsContainer extends React.Component {
  putDate = async () => {
    let response = await fetch(`/pokemons/comments/${this.props.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(this.props.data)
    });

    if (response.ok) {
      await response.json();
    } else console.log("error");

    this.props.changeSubmit();
  };

  componentDidMount() {
    this.putDate();
  }

  render() {
    return <></>;
  }
}

export default PostCommentsContainer;
