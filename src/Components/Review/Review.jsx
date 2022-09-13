import React, { Component } from 'react';
import s from './Review.module.css'
import review from '../assets/review.png'

class Review extends Component {
	render() {
		return (
			<div className='container'>
				<div className={s.reviewHeader}>
				<h1>Reviews</h1>
						<p>Listen us from our happy costumers!</p>
						<hr />
				</div>
				<div className={s.reviewWrapper}>
					<div className={s.comments}>
						<div>
							<h2>yorum</h2>
							<span>kullanicinin ismi</span>
						</div>
						<div>
							<img src="" alt="" />
						</div>
					</div>
					<div className={s.imgWrapper}>
						<img src={review} alt="Review" />
					</div>
				</div>
			</div>
		);
	}
}

export default Review;