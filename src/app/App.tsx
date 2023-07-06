import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

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
        <Header setLanguage={this.setState.bind(this)} language={this.state.language} />
        <Main language={this.state.language} />
      </div>
    );
  }
}

export default App;
