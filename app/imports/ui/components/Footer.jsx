import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container footer-background">
            <hr />
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
          </div>
        </footer>
    );
  }
}

export default Footer;
