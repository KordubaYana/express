import React from "react";
import Loading from "../Loading";
import Info from "./Info";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    this.state = { data: {}, loading: true, isHidden: true };
  }

  update = async () => {
    const responce = await fetch(`${this.url + this.props.name}`);
    const data = await responce.json();
    this.setState({ data, loading: false, isHidden: false });
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.update();
    }
  }

  getHidden = () => {
    this.setState({ isHidden: true });
  };

  infoIsVisible = () => {
    const { data } = this.state;
    if (data !== {} && !this.state.isHidden && data.sprites) {
      return true;
    }
  };

  render() {
    return (
      <>
        <Loading load={this.state.loading} data={this.state.data} />
        {this.infoIsVisible() && (
          <>
            <Info
              data={this.state.data}
              name={this.props.name}
              getHidden={this.getHidden}
            />
          </>
        )}
      </>
    );
  }
}

export default Detail;
