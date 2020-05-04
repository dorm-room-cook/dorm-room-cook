import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Input, Icon, Dropdown, Menu, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const filter = {
  filtered: false,
  minTime: 0,
  maxTime: 0,
  ingredients: [],
  type: [],
  tools: [],
};

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
];

class SearchBar extends Component {
  state = {
    results: [],
    value: '',
    source: [],
    showMore: false,
    filters: filter,
  };

  handleSearchChange = (e) => {
    this.setState({ value: e.target.value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({ results: [], value: '' });

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
  };

  onAdd = (name, list) => {
    if (name === 'ingredients') {
      this.setState({ ingredients: list });
    } else if (name === 'type') {
      this.setState({ type: list });
    } else if (name === 'tools') {
      this.setState({ tools: list });
    }
  };

  render() {
    const { source, showMore } = this.state;

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
            {showMore ?
                <div style={ filterMenu }>
                  <Grid>
                    <Grid.Row columns={4}>
                      <Grid.Column>
                        time<br/>
                        <input
                          type='number'
                          placeholder='min'
                        />
                        <input
                          type='number'
                          placeholder='max'
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
                            name='ingedients'
                            onChange={(e, selected) => this.onAdd(selected.name, selected.value)}
                            options={options}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        type
                      </Grid.Column>
                      <Grid.Column>
                        tools
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column floated='right'>
                        <p onClick={() => this.setState({ filters: filter })} >clear filters</p>
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
  height: '100%',
};

SearchBar.propTypes = {
  recipes: PropTypes.array.isRequired,
  numb: PropTypes.number.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default withRouter(SearchBar);
