import React from 'react'
import AppBar from '../components/AppBar'
import CategoriesBox from '../components/CategoriesBox'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <>
        <AppBar/>
        <SearchBar/>
        <CategoriesBox/>
    </>
  )
}

export default Home