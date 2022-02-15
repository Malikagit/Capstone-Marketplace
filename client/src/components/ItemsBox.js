import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";

const ItemsBox = () => {
    const [items, setItems] = useState([])

    const getDataItems = () => {
		setItems( // à remplacer par fetch
			[
				{name: "Item 0", price:0, imagePath:"https://picsum.photos/250/200?random=0", sellerName:"Rostyslav", sellerRating:1.0},
				{name: "Item 1", price:1, imagePath:"https://picsum.photos/250/200?random=1", sellerName:"Mustafa", sellerRating:1.1},
				{name: "Item 2", price:2, imagePath:"https://picsum.photos/250/200?random=2", sellerName:"Tristan", sellerRating:1.2},
				{name: "Item 3", price:3, imagePath:"https://picsum.photos/250/200?random=3", sellerName:"Akim", sellerRating:1.3},
				{name: "Item 5", price:5, imagePath:"https://picsum.photos/250/200?random=5", sellerName:"Yousra", sellerRating:1.5},
				{name: "Item 4", price:4, imagePath:"https://picsum.photos/250/200?random=4", sellerName:"Vincent", sellerRating:1.4},
				{name: "Item 6", price:6, imagePath:"https://picsum.photos/250/200?random=6", sellerName:"Thusika", sellerRating:1.6},
				{name: "Item 7", price:7, imagePath:"https://picsum.photos/250/200?random=7", sellerName:"Adil", sellerRating:1.7},
				{name: "Item 8", price:8, imagePath:"https://picsum.photos/250/200?random=8", sellerName:"Redouane", sellerRating:1.8},
				{name: "Item 9", price:9, imagePath:"https://picsum.photos/250/200?random=9", sellerName:"Jennifer", sellerRating:1.9},
				{name: "Item 10", price:10, imagePath:"https://picsum.photos/250/200?random=10", sellerName:"Kane", sellerRating:2.0},
				{name: "Item 11", price:11, imagePath:"https://picsum.photos/250/200?random=11", sellerName:"Oumar", sellerRating:2.1},
				{name: "Item 12", price:12, imagePath:"https://picsum.photos/250/200?random=12", sellerName:"Malika", sellerRating:2.2},
				{name: "Item 13", price:13, imagePath:"https://picsum.photos/250/200?random=13", sellerName:"Nino", sellerRating:2.3},
				{name: "Item 14", price:14, imagePath:"https://picsum.photos/250/200?random=14", sellerName:"Nicolas", sellerRating:2.4},
				{name: "Item 15", price:15, imagePath:"https://picsum.photos/250/200?random=15", sellerName:"Sebastian", sellerRating:2.5},
			]
		)
    }

    useEffect(() => {
        getDataItems()
    }, [])

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
                    )
                })
            }
        </Grid>
    )
}

export default ItemsBox;