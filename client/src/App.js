import './App.css';

import ItemsBox from './components/ItemsBox';
import AppBar from './components/AppBar';
import CategoriesBox from './components/CategoriesBox';
import SearchBar from './components/SearchBar';
import Product from './components/ProductBox';
import TestDialog from './components/CategoryDialog';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
	return (
		<div className="App">
			<AppBar/>
			<SearchBar/>
			<CategoriesBox/>
			<Container>
				<Grid container spacing={5} mb={5}>
					<ItemsBox/>
				</Grid>
			</Container>
			<Product/>
			<TestDialog/>
		</div>
	);
};

export default App;
