import React from 'react';
import { Grid } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class VendorHome extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>
          <h1> Vendor Home Page</h1>
          {/* eslint-disable-next-line max-len */}
          <p>Welcome to the vendor home page, here vendors are allowed to show what recipes they own, manage there grocery inventory and prices, and mark down on-sale items </p>

        </Grid>
    );
  }
}

export default VendorHome;
