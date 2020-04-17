import React from 'react';
import { Grid } from 'semantic-ui-react';

const footerStyle = {
  width: '100%',
  position: 'absolute',
  bottom: 0,
}

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div style={footerStyle} className="ui center aligned container footer">
            <Grid>
              <Grid.Row centered>
                <img src="/images/green-line-2.png"/>
              </Grid.Row>
            </Grid>
            <div style={{ marginTop: '50px' }} className="buttons">
              <Grid container>
                <Grid.Row centered>
                  <button className="ui circular facebook icon button">
                    <i className="facebook icon"></i>
                  </button>
                  <button className="ui circular twitter icon button">
                    <i className="twitter icon"></i>
                  </button>
                  <button className="ui circular linkedin icon button">
                    <i className="linkedin icon"></i>
                  </button>
                  <button className="ui circular instagram icon button">
                    <i className="instagram icon"></i>
                  </button>
                  <button className="ui circular twitch icon button">
                    <i className="twitch icon"></i>
                  </button>
                  <button className="ui circular youtube icon button">
                    <i className="youtube icon"></i>
                  </button>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
