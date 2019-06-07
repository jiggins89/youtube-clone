import React from 'react';

class SearchBar extends React.Component {
  state = {userInput: ''};

  onInputChange = (e) => {
    this.setState({userInput: e.target.value});
  };

  onFormSubmit= (e) => {
    e.preventDefault();
    // console.log(this);

    this.props.onFormSubmit(this.state.userInput);
  }

  render() {
    return (
      <div className="search-bar ui segment" style={{width: "100%"}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Search for some cool videos... :)"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
