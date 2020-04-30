import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const initialState = { isLoading: false, results: [], value: '', source: [] };

class SearchBar extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      })
    }, 300);
  }

  setResults = (results) => {
    console.log('hi there');
    if (this.state.source !== results) {
      console.log('is not equals');
      this.setState({ source: results });
    }
  }

  render() {
    const { isLoading, value, results, source } = this.state;
    this.setResults(this.props.recipes);

    return (
        <Grid>
          <Grid.Column>
            <Search
                input={{ fluid: true }}
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true,
                })}
                fluid
                results={results}
                value={value}
                {...this.props}
            />
          </Grid.Column>
        </Grid>
    );
  }
}

SearchBar.propTypes = {
  recipes: PropTypes.array.isRequired,
  numb: PropTypes.number.isRequired,
};

export default withRouter(SearchBar);
