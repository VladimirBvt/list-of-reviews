import React, {Component} from 'react';
import styles from './main.module.scss'
import Review from '../Review/Review';
import {getTotalPageCount, ROWS_PER_PAGE} from './utils';
import store, {RootState} from '../../store/store';
import {connect} from 'react-redux'

interface IMainProps {
  language: string;
  reviews: Review[] | [];
}

interface IMainState {
  currentPage: number;
}

type Props = Readonly<IMainProps>
type State = Readonly<IMainState>

class MainRedux extends Component<Props, State> {

  private readonly handleNextPageClick = () => {
    const currentPage = this.state.currentPage
    const nextPageNum = currentPage + 1
    const rowCount = store.getState().review.reviews.length
    const totalPages = getTotalPageCount(rowCount)
    this.setState({...this.state, currentPage: nextPageNum <= totalPages ? nextPageNum : currentPage})
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
    }
  }

  render() {
    const {review} = store.getState()
    const reviews = review.reviews
    const maxRows = reviews.length
    const maxRow = this.state.currentPage * ROWS_PER_PAGE
    const minRow = maxRow - ROWS_PER_PAGE

    return (
      <div className={styles.main}>
        <div className={styles.reviewList}>
          {
            reviews.slice(minRow, maxRow).map(review => (
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

const mapStateToProps = (state: RootState) => ({
  language: state.language.language
})

export default connect(mapStateToProps, {reviews: []})(MainRedux);
