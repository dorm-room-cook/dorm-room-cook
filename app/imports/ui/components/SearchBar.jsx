import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Input, Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const initialState = { results: [], value: '', source: [] };

class SearchBar extends Component {
  state = {
    results: [],
    value: '',
    source: [],
    filters: {
      filtered: false,
      time: 0,
      ingredients: [],
      type: [],
      tools: [],
      servings: 0,
    },
  }

  handleSearchChange = (e) => {
    this.setState({ value: e.target.value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);
      /* if (this.state.value.length < 1) return this.setState({ results: [], value: '' }); */

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      this.setState({
        results: _.filter(this.state.source, isMatch),
      });

      if (this.state.results.length === 0) {
        this.props.setResults(this.state.source);
      } else {
        this.props.setResults(this.state.results);
      }

    }, 300);
  }

  /*
  * title
  * time
  * items - #of ingredients
  * ingredients
  * type - keyword
  * tools - like stove etc
  * servings
  * views
  * created
  */

  render() {
    const { source } = this.state;

    // set up source data when component first loads
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
            <Dropdown
                text='Filter'
                icon='filter'
                fluid
                labeled
                button
                className='icon'
            >
              <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='Filter by tag' />
                <Dropdown.Divider />
                <Dropdown.Item icon='attention' text='Important' />
                <Dropdown.Item icon='comment' text='Announcement' />
                <Dropdown.Item icon='conversation' text='Discussion' />
              </Dropdown.Menu>
            </Dropdown>
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
