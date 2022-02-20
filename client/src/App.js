import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Product from './Pages/Product';
import Category from './Pages/Category';
import Login from './Pages/Login';
import AddProduct from './Pages/AddProduct';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
		 		<Route path='/' element={<Home/>}/>
				<Route path='/category/' element={<Category/>}/>
				<Route path='/search/' element={<Search/>}/>
				<Route path='/product/' element={<Product/>}/>
				<Route path='/login/' element={<Login/>}/>
				<Route path='/addproduct' element={<AddProduct/>}/>
				{/* <Route exact path='/SignIn' render={props => !isAuthenticated ? <SignIn {...props} /> : <Navigate to="/" />} /> */}
		 	</Routes>
		</BrowserRouter>
	);
};

export default App;
