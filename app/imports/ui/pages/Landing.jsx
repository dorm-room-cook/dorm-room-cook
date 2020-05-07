import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import IntroBlock from '../components/IntroBlock';
import FeaturedRecipesBlock from '../components/FeaturedRecipesBlock';
import MissionBlock from '../components/MissionBlock';
import StatisticBlock from '../components/StatisticBlock';
import SponsorsBlock from '../components/SponsorsBlock';
import SuppliersBlock from '../components/SuppliersBlock';

/** A simple static component to render some text for the landing page. */
class Landing extends Component {
  render() {
    /** This is used as a shortcut to just navigate back to the top of the page. */
        // eslint-disable-next-line no-undef
    const goToTop = () => window.scrollTo(0, 0);

    return (
        <div>
          <IntroBlock/>
          <FeaturedRecipesBlock/>
          <MissionBlock/>
          <StatisticBlock/>
          <SponsorsBlock/>
          <SuppliersBlock/>
          <a id='scrollUp' onClick={goToTop}><Icon name='angle up' inverted color='green' circular/></a>
        </div>
    );
  }
}

export default Landing;
