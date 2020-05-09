import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Input, Icon, Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// test data
const ingredient = [
  { key: 'egg', text: 'egg', value: 'egg' },
  { key: 'milk', text: 'milk', value: 'milk' },
  { key: 'oil', text: 'oil', value: 'oil' },
  { key: 'garlic', text: 'garlic', value: 'garlic' },
];

const type = [
  { key: 'Dinner', text: 'Dinner', value: 'Dinner' },
  { key: 'Breakfast', text: 'Breakfast', value: 'Breakfast' },
  { key: 'Snack', text: 'Snack', value: 'Snack' },
];

const tool = [
  { key: 'Microwave', text: 'Microwave', value: 'Microwave' },
  { key: 'Bowl', text: 'Bowl', value: 'Bowl' },
  { key: 'Stovetop', text: 'Stovetop', value: 'Stovetop' },
];

const filter = {
  filtered: false,
  minTime: '',
  maxTime: '',
  ingredients: [],
  types: [],
  tools: [],
};

class SearchBar extends Component {
  state = {
    results: [],
    value: '',
    source: [],
    showMore: false,
    filters: filter,
  };

  handleSearchChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });

    setTimeout(() => {
      this.updateResults();

    }, 300);
  };

  updateResults = () => {
    let { results } = this.state;
    const { value, source } = this.state;
    const { filtered, minTime, maxTime, ingredients, types, tools } = this.state.filters;
    results = source;
    console.log(`lookie ${value}`);
    // search bar filter
    if (value.length > 0) {
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = (result) => re.test(result.title);

      results = _.filter(this.state.source, isMatch)
    }

    if (filtered && results.length > 0) {

      // time filter
      if (minTime !== '') {
        results = _.filter(results, (r) => r.time >= minTime);
      }
      if (maxTime !== '') {
        results = _.filter(results, (r) => r.time <= maxTime);
      }

      // ingredient filter
      const inCheck = (r) => {
        let bool = true;
        for (let i = 0; i < ingredients.length; i++) {
          if (!r.ingredients.includes(ingredients[i])) {
            bool = false;
          }
        }

        return bool;
      }
      if (ingredients.length !== 0) {
        results = _.filter(results, inCheck);
      }

      // type filter
      const typeCheck = (r) => {
        let bool = true;
        for (let i = 0; i < types.length; i++) {
          if (!r.type.includes(types[i])) {
            bool = false;
          }
        }

        return bool;
      }
      if (types.length !== 0) {
        results = _.filter(results, typeCheck);
      }

      // tool filter
      const toolCheck = (r) => {
        let bool = true;
        for (let i = 0; i < tools.length; i++) {
          if (!r.tools.includes(tools[i])) {
            bool = false;
          }
        }

        return bool;
      }
      if (tools.length !== 0) {
        results = _.filter(results, toolCheck);
      }

      this.setState({ results });
    }

    if (results.length === 0) {
      this.props.setResults(this.state.source);
    } else {
      this.props.setResults(results);
    }
    console.log(results);
  }

  handleListChange = (e) => {
    const { filters } = this.state;
    filters[e.name] = e.value;
    this.setState({ filters });
    this.filtersCheck();
  };

  handleTimeChange = (e) => {
    const { filters } = this.state;
    let val = e.target.value;
    if (val.length > 0) {
      val = Number(val);
    }
    filters[e.target.name] = val;
    this.setState({ filters });
    this.filtersCheck();
  }

  filtersCheck = () => {
    const { minTime, maxTime, ingredients, types, tools } = this.state.filters;
    const { filters } = this.state;
    console.log(ingredients);
    if ( (minTime === '') && (maxTime === '')
        && (ingredients.length === 0) && (types.length === 0) && (tools.length === 0) ) {
      filters.filtered = false;
    } else {
      filters.filtered = true;
    }
    this.setState({ filters });
    this.updateResults();
  }

  render() {
    const { source, showMore } = this.state;

    // set up source data when component first loads
    if (this.props.recipes !== source) {
      this.props.setResults(this.props.recipes);
      this.setState({ source: this.props.recipes, results: this.props.recipes });
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
            {showMore ?
                <div style={ filterMenu }>
                  <Grid>
                    <Grid.Row columns={4}>
                      <Grid.Column>
                        time<br/>
                        <input
                          type='number'
                          name='minTime'
                          placeholder='min'
                          onChange={(e) => this.handleTimeChange(e)}
                        />
                        <input
                          type='number'
                          name='maxTime'
                          placeholder='max'
                          onChange={(e) => this.handleTimeChange(e)}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        ingredients
                        <Dropdown
                            placeholder='ingredients'
                            fluid
                            multiple
                            search
                            selection
                            name='ingredients'
                            onChange={(e, selected) => this.handleListChange(selected)}
                            options={ingredient}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        type
                        <Dropdown
                            placeholder='types'
                            fluid
                            multiple
                            search
                            selection
                            name='types'
                            onChange={(e, selected) => this.handleListChange(selected)}
                            options={type}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        tools
                        <Dropdown
                            placeholder='tools'
                            fluid
                            multiple
                            search
                            selection
                            name='tools'
                            onChange={(e, selected) => this.handleListChange(selected)}
                            options={tool}
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                      <p onClick={() => this.setState({ showMore: !showMore })}>show less</p>
                    </Grid.Row>
                  </Grid>
                </div>
                :
                <div onClick={() => this.setState({ showMore: !showMore })} style={{ margin: '5px 0px' }}>
                  <Icon size='large' name='bars'/>
                </div>
            }
          </Grid.Column>
        </Grid>
    );
  }
}

const filterMenu = {
  backgroundColor: 'white',
  width: '100%',
  height: '85%',
};

SearchBar.propTypes = {
  recipes: PropTypes.array.isRequired,
  numb: PropTypes.number.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default withRouter(SearchBar);
