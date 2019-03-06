import React from 'react';
//components
import Component from './components/Component';

class Main extends React.Component {
  render() {
    return (
      <div>
        I am a main!
        <Component />
      </div>
    )
  }
}

export default Main;