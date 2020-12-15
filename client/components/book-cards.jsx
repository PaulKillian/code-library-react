import React, { lazy, Suspense } from 'react';
const Card = lazy(() => import('./card'));
const Search = lazy(() => import('./search'));
const BookCard = lazy(() => import('./book-card'));
const renderLoader = () => <p>...Loading</p>;

export default class BookCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}

	// componentDidMount() {
	// 	fetch('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY', {
	// 		headers: {
	// 			Accept: 'application/json'
	// 		},
	// 		body: JSON.stringify()
	// 	})
	// 		.then(res => res.json())
	// 		.then(books => {
	// 			let newBooks = []
	// 			for (let i = 0; i < books.items.length; i++) {
	// 				let book = {};
	// 				book[`title`] = books.items[i].volumeInfo.title;
	// 				book[`thumbnail`] = books.items[i].volumeInfo.imageLinks.thumbnail;
	// 				newBooks.push(book);
	// 			}
	// 			this.setState({
	// 				books: newBooks
	// 			});
	// 		});
	// }

	render() {
		return (
			<Suspense fallback={renderLoader()}>
				<div id="cards" className="container-fluid">
					<div className="flex justif-content-around">
						<div className="contain container-fluid mt-4 ml-5">
							{this.state.books.map(book => {
								return (
									<BookCard
										title={book.title}
										thumbnail={book.thumbnail}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</Suspense>
		);
	}
}
