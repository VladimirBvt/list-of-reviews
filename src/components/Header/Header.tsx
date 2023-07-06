import React, {ChangeEvent, Component} from 'react';
import styles from './header.module.scss'
import logo from '../../assets/images/logo-reviews.png'
import Watch from '../Watch/Watch';
import {IAppState} from '../../app/App';

interface IHeaderProps {
  setLanguage: (lang: IAppState) => void;
  language: string;
}

type Props = Readonly<IHeaderProps>

class Header extends Component<Props> {

  handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.setLanguage({language: event.target.value})
  }

  render() {
    return (
      <div className={styles.header}>

        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <img src={logo} alt="logo"/>
          </div>
          <h1 className={styles.title}>Отзыв.ру</h1>
        </div>

        <div className={styles.headerRight}>
          <select onChange={this.handleLanguageChange} name="languages" className={styles.select}>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>

          <Watch />

        </div>
      </div>
    );
  }
}

export default Header;
