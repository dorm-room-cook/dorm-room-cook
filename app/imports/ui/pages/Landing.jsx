import React, { Component } from 'react';
import IntroBlock from '../components/IntroBlock';
import FeaturedRecipesBlock from '../components/FeaturedRecipesBlock';
import TransitionBlock from '../components/TransitionBlock';
import MissionBlock from '../components/MissionBlock';
import StatisticBlock from '../components/StatisticBlock';

/** A simple static component to render some text for the landing page. */
class Landing extends Component {
  render() {
    return (
        <div>
          <IntroBlock/>
          <FeaturedRecipesBlock/>
          <TransitionBlock/>
          <MissionBlock/>
          <StatisticBlock/>
        </div>
    );
  }
}

export default Landing;
