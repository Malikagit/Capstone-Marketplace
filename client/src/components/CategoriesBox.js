import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CategoryCard from "./CategoryCard";
// import { Typography } from "@mui/material";
import React from 'react';

const styleCategoriesBox = {
    height: "300px",
    color: "black",
    marginBottom: "50px",
    display: "flex",
}
const CategoriesBox = () => {
    const [categories, setCategories] = useState([]);

    const getDataCategories = () => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => { setCategories(data) })
            .catch((err) => { console.log(err) });

        // setCategories( // à remplacer par fetch
        //     [   
        //         {name: "Informatique", imagePath:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        //         {name: "Vêtements", imagePath:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        //         {name: "Véhicules", imagePath:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        //         {name: "Immobilier", imagePath:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        //         {name: "Sport", imagePath:"https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
        //     ]
        // );
    };

    useEffect(() => {
        getDataCategories()
    }, []);

    const styleCategoriesBox = {
        height: "300px",
        color: "black",
        marginBottom: "50px",
        display: "flex",
    };


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
                                    imagePath={elem.imagePath}
                                />
                            );
                        })
                    }
                </Grid>
            </Container>
        </>
    );
};

export default CategoriesBox;