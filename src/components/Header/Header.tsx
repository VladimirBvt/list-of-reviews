import React, {Component} from 'react';
import styles from './header.module.scss'
import logo from '../../assets/images/logo-reviews.png'
import Watch from '../Watch/Watch';

class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <h1 className={styles.title}>Отзывы</h1>
        <select name="languages" className={styles.select}>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
        <Watch />
      </div>
    );
  }
}

export default Header;
