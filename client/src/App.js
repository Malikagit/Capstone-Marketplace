import './App.css';
import { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard';
import AppBar from './components/AppBar'
import CategoriesBox from './components/CategoriesBox'
import SearchBar from './components/SearchBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
	const [meubles, setMeubles] = useState([])

	const getData = () => {
		// fetch ...
		setMeubles(
			[
				{name: "item 0", price:0, imagePath:"https://picsum.photos/200?random=0", sellerName:"Aa", sellerRating:1.0},
				{name: "item 1", price:1, imagePath:"https://picsum.photos/200?random=1", sellerName:"Bb", sellerRating:1.1},
				{name: "item 2", price:2, imagePath:"https://picsum.photos/200?random=2", sellerName:"Cc", sellerRating:1.2},
				{name: "item 3", price:3, imagePath:"https://picsum.photos/200?random=3", sellerName:"Dd", sellerRating:1.3},
				{name: "item 4", price:4, imagePath:"https://picsum.photos/200?random=4", sellerName:"Ee", sellerRating:1.4},
				{name: "item 5", price:5, imagePath:"https://picsum.photos/200?random=5", sellerName:"Ff", sellerRating:1.5},
				{name: "item 6", price:6, imagePath:"https://picsum.photos/200?random=6", sellerName:"Gg", sellerRating:1.6},
				{name: "item 7", price:7, imagePath:"https://picsum.photos/200?random=7", sellerName:"Hh", sellerRating:1.7},
				{name: "item 8", price:8, imagePath:"https://picsum.photos/200?random=8", sellerName:"Ii", sellerRating:1.8},
				{name: "item 9", price:9, imagePath:"https://picsum.photos/200?random=9", sellerName:"Jj", sellerRating:1.9},
				{name: "item 10", price:10, imagePath:"https://picsum.photos/200?random=10", sellerName:"Kk", sellerRating:2.0},
				{name: "item 11", price:11, imagePath:"https://picsum.photos/200?random=11", sellerName:"Ll", sellerRating:2.1},
				{name: "item 12", price:12, imagePath:"https://picsum.photos/200?random=12", sellerName:"Mm", sellerRating:2.2},
				{name: "item 13", price:13, imagePath:"https://picsum.photos/200?random=13", sellerName:"Nn", sellerRating:2.3},
				{name: "item 14", price:14, imagePath:"https://picsum.photos/200?random=14", sellerName:"Oo", sellerRating:2.4},
				{name: "item 15", price:15, imagePath:"https://picsum.photos/200?random=15", sellerName:"Pp", sellerRating:2.5},
			]
		)
	}

	useEffect(() => {
		getData()
	}, []) 

	return (
	
		<div className="App">
			<AppBar/>
			<SearchBar/>
			<CategoriesBox/>
			<Container>
				<Grid container spacing={5} mb={5}>
					{
						meubles.map(elem => {
							return (
								<ItemCard
								name={elem.name}
								price={elem.price}
								imagePath={elem.imagePath}
								sellerName={elem.sellerName}
								sellerRating={elem.sellerRating}
								/>
							)
						})
					}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
