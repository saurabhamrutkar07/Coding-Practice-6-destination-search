import "./index.css";
import { Component } from "react";
import DestinationItem from "../DestinationItem";
class DestinationSearch extends Component {
  state = { searchInput: "" };
  applySearch = (event) => {
    // console.log(event.target.value);
    this.setState({ searchInput: event.target.value });
  };
  render() {
    const { destinationsList } = this.props;
    const { searchInput } = this.state;
    const searchResults = destinationsList.filter((eachItem) => {
      return eachItem.name.includes(searchInput);
    });

    return (
      <div className="search-container">
        <h1 className="main-heading">Destination Search </h1>
        <div className="search-bar">
          <input
            onChange={this.applySearch}
            value={searchInput}
            type="search"
            placeholder="search"
            className="search-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul>
          {searchResults.map((item) => {
            return <DestinationItem item={item} key={item.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default DestinationSearch;
