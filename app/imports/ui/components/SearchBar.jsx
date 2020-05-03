import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid, Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
/*import PropTypes from 'prop-types';*/

const initialState = { isLoading: false, results: [], value: '', source: [] };

class SearchBar extends Component {
  state = initialState;

  handleSearchChange = (e) => {
    this.setState({ isLoading: true, value: e.target.value });
    console.log('change');

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      });
    }, 300);
  }
/*
  setResults = (results) => {
    console.log('hi there');
    if (this.state.source !== results) {
      console.log('is not equals');
      this.setState({ source: results });
    }
  }
*/
  render() {
    const { isLoading, value, results, source } = this.state;
    if (this.props.recipes !== source) {
      this.setState({ source });
    }

    return (
        <Grid>
          <Grid.Column>
            <Input
                icon='search'
                fluid
                placeholder='Search for a recipe...'
                onChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true,
                })}
            />
          </Grid.Column>
        </Grid>
    );
  }
}
/*
SearchBar.propTypes = {
  recipes: PropTypes.array.isRequired,
  numb: PropTypes.number.isRequired,
  setResults: PropTypes.function.isRequired,
};
*/
export default withRouter(SearchBar);
