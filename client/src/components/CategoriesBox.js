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
                {name: "Informatique", imagePath:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
                {name: "Vêtements", imagePath:"https://picsum.photos/200?random=1"},
                {name: "Véhicules", imagePath:"https://picsum.photos/200?random=2"},
                {name: "Immobilier", imagePath:"https://picsum.photos/200?random=3"},
                {name: "Sport", imagePath:"https://picsum.photos/200?random=4"},
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