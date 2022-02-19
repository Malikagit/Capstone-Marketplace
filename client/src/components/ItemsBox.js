import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";

const ItemsBox = () => {
    const [items, setItems] = useState([]);

    const getDataItems = () => {
		setItems( // à remplacer par fetch
			[ // rajouter maxWidth et maxHeight là où il faut
				{name: "Item 0", price:0, imagePath:"https://picsum.photos/250/200?random=0", sellerName:"David", sellerRating:4.8},
				{name: "Item 1", price:1, imagePath:"https://picsum.photos/250/200?random=1", sellerName:"Fatou", sellerRating:4.9},
				{name: "Item 2", price:2, imagePath:"https://picsum.photos/250/200?random=2", sellerName:"Manuel", sellerRating:4.8},
				{name: "Item 3", price:3, imagePath:"https://picsum.photos/250/200?random=3", sellerName:"Dimitri", sellerRating:4.9},
				{name: "Item 5", price:5, imagePath:"https://picsum.photos/250/200?random=5", sellerName:"Bruno", sellerRating:4.8},
				{name: "Item 4", price:4, imagePath:"https://picsum.photos/250/200?random=4", sellerName:"Alexandre", sellerRating:4.9},
				{name: "Item 6", price:6, imagePath:"https://picsum.photos/250/200?random=6", sellerName:"Victor", sellerRating:4.8},
				{name: "Item 7", price:7, imagePath:"https://picsum.photos/250/200?random=7", sellerName:"Marie", sellerRating:4.9},
				{name: "Item 8", price:8, imagePath:"https://picsum.photos/250/200?random=8", sellerName:"Dora", sellerRating:4.8},
				{name: "Item 9", price:9, imagePath:"https://picsum.photos/250/200?random=9", sellerName:"Hayat", sellerRating:4.9},
				{name: "Item 10", price:10, imagePath:"https://picsum.photos/250/200?random=10", sellerName:"Annie", sellerRating:4.8},
				{name: "Item 11", price:11, imagePath:"https://picsum.photos/250/200?random=11", sellerName:"Laure", sellerRating:4.8},
				{name: "Item 12", price:12, imagePath:"https://picsum.photos/250/200?random=12", sellerName:"Kim", sellerRating:4.9},
				{name: "Item 13", price:13, imagePath:"https://picsum.photos/250/200?random=13", sellerName:"Yasmin", sellerRating:4.9},
				{name: "Item 14", price:14, imagePath:"https://picsum.photos/250/200?random=14", sellerName:"Martin", sellerRating:4.8},
				{name: "Item 15", price:15, imagePath:"https://picsum.photos/250/200?random=15", sellerName:"Harry", sellerRating:4.9},
			]
		);
    };

    useEffect(() => {
        getDataItems()
    }, []);

    return (
        <Grid container spacing={5} mb={5} ml={1}>
            {
                items.map(elem => {
                    return (
                        <ItemCard
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
    );
};

export default ItemsBox;