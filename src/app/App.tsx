import React, {Component} from 'react';
import MainRedux from '../components/Main/Main';
import Header from '../components/Header/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainRedux />
      </div>
    );
  }
}

export default App;
