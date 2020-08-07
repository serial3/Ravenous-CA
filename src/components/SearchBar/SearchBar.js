import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'best Match': 'best_match',
    'highest Rated': 'rating',
    'most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => { let sortByOptionValue = sortByOptions[sortByOption];
          return <li key={this.sortByOptionValue}>{this.sortByOption}</li>
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
          <div className="SearchBar-submit">
            <a>Let's Go</a>
         </div>
        </div>
      )}
}

export default SearchBar;