import React, { Component } from 'react';
import { Icon, Image } from 'semantic-ui-react';
import IntroBlock from '../components/IntroBlock';
import FeaturedRecipesBlock from '../components/FeaturedRecipesBlock';
import MissionBlock from '../components/MissionBlock';
import StatisticBlock from '../components/StatisticBlock';
// import SponsorsBlock from '../components/SponsorsBlock';
import SuppliersBlock from '../components/SuppliersBlock';
import ActionBlock from '../components/ActionBlock';

/** A simple static component to render some text for the landing page. */
class Landing extends Component {
  render() {
    /** This is used as a shortcut to just navigate back to the top of the page. */
        // eslint-disable-next-line no-undef
    const goToTop = () => window.scrollTo(0, 0);

    return (
        <div>
          <IntroBlock/>
          <Image src='https://i2.wp.com/overloadfitness.com/wp-content/uploads/2019/06/divider.png?w=2340&ssl=1'
                 centered style={{ transform: 'scaleY(-1)', width: '65%', height: '15px' }}/>
          <FeaturedRecipesBlock/>
          <Image src='https://i2.wp.com/overloadfitness.com/wp-content/uploads/2019/06/divider.png?w=2340&ssl=1'
                 centered style={{ width: '65%', height: '15px' }}/>
          <MissionBlock/>
          <StatisticBlock/>
          {/*<SponsorsBlock/>*/}
          <SuppliersBlock/>
          <ActionBlock/>
          <a id='scrollUp' onClick={goToTop}><Icon name='angle up' inverted color='green' circular/></a>
        </div>
    );
  }
}

export default Landing;
