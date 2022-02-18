import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import React from 'react';

const ItemsBox = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(response => response.data.articles)
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Grid container spacing={5} mb={5} ml={1}>

            {
                items.map(elem => {
                    return (
                        <ItemCard
                            key={elem.id}
                            name={elem.name}
                            price={elem.price}
                            imagePath={elem.picturePath}
                            sellerName={elem.seller}
                            sellerRating={elem.sellerRating}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default ItemsBox;