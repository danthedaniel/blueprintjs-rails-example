import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.defaultViewProps = {};
  }

  render() {
    return (
      <div className="pt-app">
        <nav className="pt-navbar pt-fixed-top pt-elevation-2">
          <div className="centered-top-level">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Blueprint</div>
            <input className="pt-input" placeholder="Search files..." type="text" />
          </div>
          <div className="pt-navbar-group pt-align-right">
            <button className="pt-button pt-minimal pt-icon-home">Home</button>
            <button className="pt-button pt-minimal pt-icon-document">Files</button>
            <span className="pt-navbar-divider"></span>
            <button className="pt-button pt-minimal pt-icon-user"></button>
            <button className="pt-button pt-minimal pt-icon-notifications"></button>
            <button className="pt-button pt-minimal pt-icon-cog"></button>
          </div>
          </div>
        </nav>
        <div className="centered-top-level main-content">
        {
          React.Children.map(this.props.children,
            child => React.cloneElement(child, this.defaultViewProps)
          )
        }
        </div>
      </div>
    );
  }
}
