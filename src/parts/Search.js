import React, { Component, Fragment } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    //   e.target.value
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
    this.props.props(e.target.value);
  };

  render() {
    return (
      <Fragment>
        <nav>
          <div class="nav-wrapper">
            <form>
              <div class="input-field">
                <input
                  id="search"
                  type="search"
                  required
                  onChange={this.handleChange}
                  value={this.state.search}
                />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Search;
