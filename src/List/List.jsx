import React from "react";
import ListItem from "./ListItem";
import Loading from "../Loading";
import ButtonNext from "../Buttons/ButtonNext";
import ButtonPrev from "../Buttons/ButtonPrev";

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    this.state = { data: {}, loading: true, prev: false, next: true };
  }

  hasNextOrPrevButton = () => {
    if (!this.state.data.previous) {
      this.setState({ prev: false });
    }
    if (!this.state.data.next) {
      this.setState({ next: false });
    }
    if (this.state.data.previous) {
      this.setState({ prev: true });
    }
    if (this.state.data.next) {
      this.setState({ next: true });
    }
  };

  update = async url => {
    const responce = await fetch(url);
    const data = await responce.json();
    this.setState({ data, loading: false });
    this.hasNextOrPrevButton();
  };

  componentDidMount() {
    this.update(this.url);
  }

  getClickName = name => {
    this.props.getClickName(name);
  };

  getClickNext = () => {
    if (this.state.data.next) {
      this.update(this.state.data.next);
    }
  };

  getClickPrev = () => {
    if (this.state.data.previous) {
      this.update(this.state.data.previous);
    }
  };

  render() {
    const hasDataResults = this.state.data.results;
    return (
      <div className="pokemonList">
        <Loading load={this.state.loading} data={this.state.data} />
        {hasDataResults && (
          <ul>
            <ListItem
              data={this.state.data.results}
              onClick={this.getClickName}
            />
            <ButtonPrev
              hasPrev={this.state.prev}
              onClickButtonPrev={this.getClickPrev}
            />
            <ButtonNext
              onClickButtonNext={this.getClickNext}
              hasNext={this.state.next}
            />
          </ul>
        )}
      </div>
    );
  }
}

export default List;
