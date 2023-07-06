import React, {Component} from 'react';
import styles from './main.module.scss'
import reviews from '../../data.json'
import reviewsData from '../../data.json';

interface IMainProps {
  language: string
}

interface IMainState {
  reviews: ReviewsData;
  currentPage: number;
  disableLeft: boolean,
  disableRight: boolean,
}

interface IClientReview {
  name: string;
  review: string;
  date: string;
}

type Props = Readonly<IMainProps>
type State = Readonly<IMainState>
type ReviewsData = typeof reviewsData

const ROWS_PER_PAGE = 10

const getTotalPageCount = (rowCount: number) => {
  return Math.ceil(rowCount / ROWS_PER_PAGE)
}

const getRowsInPage = (
  currentPage: number,
  data: IClientReview[],
  // totalRows: number
) => {
  const maxRow = currentPage * ROWS_PER_PAGE // 2 * 10 = 20
  const minRow = maxRow - ROWS_PER_PAGE // 20 - 10 = 10

  return data.slice(minRow, maxRow)
}


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


  componentDidMount() {

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
    const maxRow = this.state.currentPage * ROWS_PER_PAGE // 2 * 10 = 20
    const minRow = maxRow - ROWS_PER_PAGE // 20 - 10 = 10

    console.log(this.state)

    return (
      <div className={styles.main}>
        <div>
          {language === 'ru' ?
            reviewsRu.slice(minRow, maxRow).map((review) => (
              <div key={review[0]}>
                <div>Имя клиента: {review[1].name}</div>
                <div>Отзыв: {review[1].review}</div>
                <div>Дата: {review[1].date}</div>
              </div>
            )) :
            reviewsEn.slice(minRow, maxRow).map(review => (
              <div key={review[0]}>
                <div>Имя клиента: {review[1].name}</div>
                <div>Отзыв: {review[1].review}</div>
                <div>Дата: {review[1].date}</div>
              </div>
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
