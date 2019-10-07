import React from "react";

class ListItem extends React.Component {
  handleClick = e => {
    const name = e.target.className;
    this.props.onClick(name);
  };

  render() {
    return this.props.data.map((item, index) => (
      <li key={index} onClick={this.handleClick} className={item.name}>
        {item.name}
      </li>
    ));
  }
}

export default ListItem;
