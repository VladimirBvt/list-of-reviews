import React, {Component} from 'react';
import styles from './review.module.scss'

type TReview = {
  name: string,
  review: string,
  date: string,
}

interface IReviewProps {
  review: TReview
}

type Props = Readonly<IReviewProps>

class Review extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {name, review, date} = this.props.review

    return (
      <div className={styles.review}>
        <div><span className={styles.title}>Имя клиента:</span> {name}</div>
        <div><span className={styles.title}>Отзыв:</span> {review}</div>
        <div><span className={styles.title}>Дата:</span> {date}</div>
      </div>
    );
  }
}

export default Review;
