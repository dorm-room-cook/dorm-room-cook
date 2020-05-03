import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Input, Icon, Dropdown, Menu, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    results: [],
    value: '',
    source: [],
    showMore: false,
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
  }

  /*
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
                  {/* maybe use grid or flex */}
                  <p onClick={() => this.setState({ showMore: !showMore })}>show less</p>
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
  height: '150px',
}

SearchBar.propTypes = {
  recipes: PropTypes.array.isRequired,
  numb: PropTypes.number.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default withRouter(SearchBar);
