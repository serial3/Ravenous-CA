import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: ' ',
        location: ' ',      
        sortBy: 'best_match'
      };
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

      this.sortByOptions = {
        'best Match': 'best_match',
        'highest Rated': 'rating',
        'most Reviewed': 'review_count'
      };              
    };

    getSortByClass() {
      if (this.state.sortBy === this.sortByOption) {
        return 'active'
      } return ' ';
    };

    handleSortByChange(sortByOption) {
      this.setState({sortBy: sortByOption})
    };

    handleTermChange(event) {
      this.setState({term: event.target.value});
    };

    handleLocationChange(event) {
      this.setState({location: event.target.value});
    };

    handleSearch(event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy); 
      event.preventDefault();
    };

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
          let sortByOptionValue = this.sortByOptions[sortByOption];

          return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} 
          className={this.getSortByClass(sortByOptionValue)} 
          key={this.sortByOptionValue}> {this.sortByOption} </li>
        });
    }
    render() {
      return (
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
         </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
          <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
         </div>
        </div>
      )}  
}

export default SearchBar;