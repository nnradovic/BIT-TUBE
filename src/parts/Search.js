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
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  required
                  onChange={this.handleChange}
                  value={this.state.search}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Search;
