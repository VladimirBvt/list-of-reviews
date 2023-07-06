import React, {Component} from 'react';
import styles from './watch.module.scss'

interface IWatchProps {

}

interface IWatchState {
  date: Date;
}

type Props = Readonly<IWatchProps>
type State = Readonly<IWatchState>

class Watch extends Component<Props, State> {
  private timerId: NodeJS.Timer | undefined;

  constructor(props: Props) {
    super(props)

    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({date: new Date()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const {date} = this.state

    return (
      <div className={styles.watch}>
        {date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Watch;
