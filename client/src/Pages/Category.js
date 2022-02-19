import AppBar from '../components/AppBar'
import SearchBar from '../components/SearchBar'
import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import ItemsBox from '../components/ItemsBox'

const Category = () => {
  return (
    <>
        <AppBar/>
        <SearchBar exact />
           	<Container>
		   		<Grid container spacing={5} mb={5}>
		   			<ItemsBox/>
		   		</Grid>
		   	</Container>
    </>
  )
}

export default Category