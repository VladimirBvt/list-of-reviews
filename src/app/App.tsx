import React, {Component} from 'react';
import HeaderWithoutRedux from '../components/Header/HeaderWithoutRedux';
import MainWithoutRedux from '../components/Main/MainWithoutRedux';
import MainRedux from '../components/Main/MainRedux';
import HeaderRedux from '../components/Header/HeaderRedux';

interface IAppProps {}

export interface IAppState {
  language: string
}

type Props = Readonly<IAppProps>
type State = Readonly<IAppState>


class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      language: 'ru',
    }
  }

  render() {
    return (
      <div>
        {/*<HeaderWithoutRedux setLanguage={this.setState.bind(this)} language={this.state.language} />*/}
        <HeaderRedux />
        {/*<MainWithoutRedux language={this.state.language} />*/}
        <MainRedux />
      </div>
    );
  }
}

export default App;
