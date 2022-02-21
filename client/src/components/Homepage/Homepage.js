
import './Homepage.css';
import ItemsBox from '../ItemsBox';
import CategoriesBox from '../CategoriesBox';
import SearchBar from '../SearchBar'
import Product from '../ProductBox';
import Chat from '../Chat';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
class Homepage extends React.Component {
    render() {
        return (
            <>
                <SearchBar />
                <CategoriesBox />
                <Container>
                    <Grid container spacing={5} mb={5}>
                        <ItemsBox />
                    </Grid>
                </Container>
                <Product />
                {/* <Chat /> */}
            </>
        );
    }

}

export default Homepage;
