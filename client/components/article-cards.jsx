import React, { lazy, Suspense } from 'react';
const Card = lazy(() => import('./card'));
const Search = lazy(() => import('./search'));
const ArticleCard = lazy(() => import('./article-card'));
const renderLoader = () => <p>...Loading</p>;

export default class ArticleCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		fetch('https://www.googleapis.com/customsearch/v1/?q=javascriptarticles&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY&cx=d2497e17a0fa9a70d', {
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify()
		})
			.then(res => res.json())
			.then(articles => {
				let newArticles = []
				let pagemap = []
				let n = []
				let c = []
				for (let i = 0; i < articles.items.length; i++) {
					let article = {};
					article[`title`] = articles.items[i].title;
					article[`link`] = articles.items[i].link;
					pagemap.push(articles.items[i].pagemap);
					newArticles.push(article);
					// article[`thumbnail`] = articles.items[i].pagemape[i].cse_thumbnail[i].src;
				}
				for (let i = 0; i < pagemap.length; i++) {
					n.push(pagemap[i].cse_image)
				}
				for (let i = 0; i < n.length; i++) {
					c.push(n[i])

					// console.log(n)
				}


				// for (let i = 0; i < articles.items.length; i++) {
				// 	let article = {};
				// 	article[`thumbnail`] = articles.items[i].volumeInfo.title;
				// }
				// }
				console.log(c)

				// this.setState({
				// 	articles: newarticles
				// });
			});
	}

	render() {
		console.log(this.state)
		return (
			<Suspense fallback={renderLoader()}>
				<Search />
				<div className="container-fluid">
					<div className="flex justif-content-around">
						<div className="contain container-fluid mt-4 ml-5">
							{/* {this.state.articles.map(book => {
								return (
									<BookCard
										title={book.title}
										thumbnail={book.thumbnail}
									/>
								);
							})} */}
						</div>
					</div>
				</div>
			</Suspense>
		);
	}
}
