import React, {ChangeEvent, Component} from 'react';
import styles from './header.module.scss';
import logo from '../../assets/images/logo-reviews.png';
import Watch from '../Watch/Watch';
import store from '../../store/store';
import {changeLanguage} from '../../store/slices/languageSlice';


class HeaderRedux extends Component {

  handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    store.dispatch(changeLanguage(event.target.value))
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

export default HeaderRedux;
