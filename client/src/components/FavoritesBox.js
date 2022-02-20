import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import FavoriteCard from "./FavoriteCard";
import Typography from "@mui/material/Typography";

const FavoritesBox = () => {
    const [items, setItems] = useState([]);

    const getDataItems = () => {
		setItems( // à remplacer par fetch
			[ // rajouter maxWidth et maxHeight là où il faut
				{name: "Raquette de tennis", price:40, imagePath:"https://images.unsplash.com/photo-1512412046876-f386342eddb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", sellerName:"David", sellerRating:4.8},
				{name: "Moto", price:9500, imagePath:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JjeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", sellerName:"Fatou", sellerRating:4.9},
				{name: "Enceintes", price:99, imagePath:"https://images.unsplash.com/photo-1612241143917-d05c85c43751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BlYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", sellerName:"Manuel", sellerRating:4.8},
			]
		);
    };

    useEffect(() => {
        getDataItems()
    }, []);

    return (
        <>
            <Typography sx={{ fontSize: 32, textAlign: 'center', mb: 5}}>Mes annonces favorites</Typography>
            <Grid container display="flex" direction="row" justifyContent="space-evenly" alignItems="center">
                {
                    items.map(elem => {
                        return (
                            <FavoriteCard
                                name={elem.name}
                                price={elem.price}
                                imagePath={elem.imagePath}
                                sellerName={elem.sellerName}
                                sellerRating={elem.sellerRating}
                            />
                        );
                    })
                }
            </Grid>
        </>
    );
};

export default FavoritesBox;