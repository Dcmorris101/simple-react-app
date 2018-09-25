import React, { Component } from 'react';

// Function based component
/* const SearchBar = () => {
  return <input />; // React.createElement
};
*/

// Class Based component used whenever we want to use internal record keeping
// Create new class and give it all functionality that react.component class has
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // The only time where state is changed with this method
    this.state = { term: '' };
  }


  render() {
    // HTML elements emit a change history which we can tap into by "on" then
    // the event then the reference to the event handler
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// Make sure the only code being exported from this file is this component
export default SearchBar;
