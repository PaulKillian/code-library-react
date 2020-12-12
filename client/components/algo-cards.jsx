import React, { lazy, Suspense } from 'react';
const Card = lazy(() => import('./card'));
const Search = lazy(() => import('./search'));
const AlgoCard = lazy(() => import('./algo-card'));
const renderLoader = () => <p>...Loading</p>;

export default class AlgoCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			algos: []
		};
	}

	componentDidMount() {
		fetch('https://custom-search.p.rapidapi.com/api/search/CustomWebSearchAPIV2?q=react&searchEngineId=225781483726139679&pageNumber=5', {
			headers: {
				'Content-Type': 'application/json',
				'X-RapidAPI-Host': 'custom-search.p.rapidapi.com',
				'X-RapidAPI-Key': 'a3648c9cb4mshd3b431b038463fbp1aeb59jsn73e1cdc213d6'
			},
			body: JSON.stringify()
		})
			.then(res => res.json())
			.then(algos => {
				// let newalgos = []
				// let pagemap = []
				// let n = []
				// let c = []
				// for (let i = 0; i < algos.items.length; i++) {
				// 	let algo = {};
				// 	algo[`title`] = algos.items[i].title;
				// 	algo[`link`] = algos.items[i].link;
				// 	pagemap.push(algos.items[i].pagemap);
				// 	newalgos.push(algo);
				// 	// algo[`thumbnail`] = algos.items[i].pagemape[i].cse_thumbnail[i].src;
				// }
				// for (let i = 0; i < pagemap.length; i++) {
				// 	n.push(pagemap[i].cse_image)
				// }
				// for (let i = 0; i < n.length; i++) {
				// 	c.push(n[i])

				// 	// console.log(n)
				// }


				// for (let i = 0; i < algos.items.length; i++) {
				// 	let algo = {};
				// 	algo[`thumbnail`] = algos.items[i].volumeInfo.title;
				// }
				// }
				console.log(algos)

				// this.setState({
				// 	algos: newalgos
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
							{/* {this.state.algos.map(book => {
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
