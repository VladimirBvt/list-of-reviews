import React, {Component} from 'react';
import styles from './main.module.scss'
import reviews from '../../data.json'
import reviewsData from '../../data.json';
import Review from '../Review/Review';
import {getTotalPageCount, ROWS_PER_PAGE} from './utils';

interface IMainProps {
  language: string
}

interface IMainState {
  reviews: ReviewsData;
  currentPage: number;
  disableLeft: boolean,
  disableRight: boolean,
}

type Props = Readonly<IMainProps>
type State = Readonly<IMainState>
type ReviewsData = typeof reviewsData




class Main extends Component<Props, State> {
  private readonly handleNextPageClick = () => {
    const currentPage = this.state.currentPage
    const nextPage = currentPage + 1
    const rowCount = this.props.language === 'ru' ?
      Object.entries(this.state.reviews.ru).length :
      Object.entries(this.state.reviews.en).length
    const totalPages = getTotalPageCount(rowCount)
    this.setState({...this.state, currentPage: nextPage <= totalPages ? nextPage : currentPage})
  }

  private readonly handlePrevPageClick = () => {
    const currentPage = this.state.currentPage
    const prevPage = currentPage - 1
    this.setState({...this.state, currentPage: prevPage > 0 ? prevPage : currentPage})
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      currentPage: 1,
      disableLeft: true,
      disableRight: false,
      reviews,
    }
  }

  render() {
    const language = this.props.language
    const reviewsRu = Object.entries(this.state.reviews.ru)
    const reviewsEn = Object.entries(this.state.reviews.en)
    const maxRows = language === 'ru' ? reviewsRu.length : reviewsEn.length
    const maxRow = this.state.currentPage * ROWS_PER_PAGE
    const minRow = maxRow - ROWS_PER_PAGE

    return (
      <div className={styles.main}>
        <div className={styles.reviewList}>
          {language === 'ru' ?
            reviewsRu.slice(minRow, maxRow).map((review) => (
              <Review review={review[1]} key={review[0]} />
            )) :
            reviewsEn.slice(minRow, maxRow).map(review => (
              <Review review={review[1]} key={review[0]} />
            ))
          }
        </div>

        <div className={styles.pagination}>
          <button className={styles.button}
                  onClick={this.handlePrevPageClick}
                  disabled={this.state.currentPage === 1}
          >
            {'<'}
          </button>
          <span className={styles.currentPage}>{this.state.currentPage}</span>
          <button className={styles.button}
                  onClick={this.handleNextPageClick}
                  disabled={this.state.currentPage === getTotalPageCount(maxRows)}
          >
            {'>'}
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
