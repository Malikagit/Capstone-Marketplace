import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useEffect, useState } from "react";
import SellerCard from './SellerCard';
import ProductCard from './ProductCard';

const ProductBox = () => {

    const [seller, setSeller] = useState([]);

    const getDataSeller = () => {
        setSeller( // à remplacer par fetch
            [
                {
                    name: "Gabriel Gonzales",
                    rating:"4.6",
                    imagePath:"https://picsum.photos/200?random=0",
                }
            ]
        );
    };



    const [product, setProduct] = useState([]);

    const getDataProduct = () => {
        setProduct( // à remplacer par fetch
            [
                {
                    name:"Mon super truc que je vends",
                    price:2500,
                    imagePath:"https://picsum.photos/960/540?random=0",
                    description:"Wikipédia est une encyclopédie universelle et multilingue créée par Jimmy Wales et Larry Sanger le 15 janvier 2001. Il s'agit d'une œuvre libre, c'est-à-dire que chacun est libre de la rediffuser. Gérée en wiki dans le site web wikipedia.org grâce au logiciel MediaWiki, elle permet à tous les internautes d'écrire et de modifier des articles, ce qui lui vaut d'être qualifiée d'encyclopédie participative. Elle est devenue en quelques années l'encyclopédie la plus fournie et la plus consultée au monde. ",
                }
            ]
        );
    };

    useEffect(() => {
        getDataSeller()
        getDataProduct()
    }, []);

        return (
        <Container display="flex" direction="row" justifyContent="space-evenly" alignItems="center">
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 2">
                        {
                            seller.map(elem => {
                                return (
                                    <SellerCard
                                        name={elem.name}
                                        imagePath={elem.imagePath}
                                        rating={elem.rating}
                                    />
                                );
                            })
                        }
                    </Box>
                    <Box gridColumn="span 10">
                        {
                            product.map(elem => {
                                return (
                                    <ProductCard
                                        name={elem.name}
                                        price={elem.price}
                                        description={elem.description}
                                    />
                                );
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ProductBox;