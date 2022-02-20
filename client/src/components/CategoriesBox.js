import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import React from 'react';

const styleCategoriesBox = {
    height: "300px",
    color: "black",
    marginBottom: "50px",
    display: "flex",
}
const CategoriesBox = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => { setCategories(data) })
            .catch((err) => { console.log(err) });
    }, []);

    return (
        <>
            <Typography sx={{ fontSize: 32, textAlign: 'center' }}>Top Catégories</Typography>
            <Container style={styleCategoriesBox}>
                <Grid container display="flex" direction="row" justifyContent="space-evenly" alignItems="center">
                    {
                        categories.map(elem => (
                            //return (
                            <CategoryCard
                                key={elem.id}
                                name={elem.name}
                                imagePath={elem.imagePath}
                            />
                        )
                        )
                    }
                </Grid>
            </Container>
        </>
    )
}

export default CategoriesBox;