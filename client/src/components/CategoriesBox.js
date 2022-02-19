import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CategoryCard from "./CategoryCard";

const CategoriesBox = () => {
    const [categories, setCategories] = useState([]);

    const getDataCategories = () => {
        setCategories( // à remplacer par fetch
            [   // rajouter maxWidth et maxHeight là où il faut + scaling
                {name: "Category 0", imagePath:"https://picsum.photos/200?random=0"},
                {name: "Category 1", imagePath:"https://picsum.photos/200?random=1"},
                {name: "Category 2", imagePath:"https://picsum.photos/200?random=2"},
                {name: "Category 3", imagePath:"https://picsum.photos/200?random=3"},
                {name: "Category 4", imagePath:"https://picsum.photos/200?random=4"},
            ]
        );
    };

    useEffect(() => {
        getDataCategories()
    }, []);
    
    const styleCategoriesBox = {
        height: "300px",
        color: "black",
        marginBottom: "50px",
        display:"flex",
	};

    return (
        <>
            <Typography sx={{ fontSize: 32, textAlign: 'center'}}>Top Catégories</Typography>
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