import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const initialState = { results: [], value: '', source: [] };

class SearchBar extends Component {
  state = initialState;

  handleSearchChange = (e) => {
    this.setState({ value: e.target.value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      });

      if (this.state.results.length === 0) {
        this.props.setResults(this.state.source);
      } else {
        this.props.setResults(this.state.results);
      }

    }, 300);
  }

  render() {
    const { source } = this.state;
    if (this.props.recipes !== source) {
      this.props.setResults(this.props.recipes);
      this.setState({ source: this.props.recipes });
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

SearchBar.propTypes = {
  recipes: PropTypes.array.isRequired,
  numb: PropTypes.number.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default withRouter(SearchBar);
