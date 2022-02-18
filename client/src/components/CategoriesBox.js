import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import React from 'react';
import axios from "axios";

const CategoriesBox = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(response => response.data.elements)
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, [])

    const styleCategoriesBox = {
        height: "300px",
        color: "black",
        marginBottom: "50px",
        display: "flex",
    }

    return (
        <>
            <Typography sx={{ fontSize: 32, textAlign: 'center' }}>Top Catégories</Typography>
            <Container style={styleCategoriesBox}>
                <Grid container display="flex" direction="row" justifyContent="space-evenly" alignItems="center">
                    {
                        categories.map(elem => {
                            return (
                                <CategoryCard
                                    name={elem.name}
                                // imagePath={elem.imagePath}
                                />
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default CategoriesBox;