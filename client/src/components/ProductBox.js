import * as React from 'react';
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import SellerCard from './SellerCard';
import ProductCard from './ProductCard';

const ProductBox = () => {

    const [seller, setSeller] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getDataSeller()
        getDataProduct()
    }, []);

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

    const getDataProduct = () => {
        setProduct( // à remplacer par fetch
            [
                {
                    name:"Mon super truc que je vends",
                    price:2500,
                    imagePath:"https://picsum.photos/960/540?random=0",
                    description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.

                    Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.
                    
                    Curabitur semper venenatis lectus viverra ex dictumst nulla maximus. Primis iaculis elementum conubia feugiat venenatis dolor augue ac blandit nullam ac phasellus turpis feugiat mollis. Duis lectus porta mattis imperdiet vivamus augue litora lectus arcu. Justo torquent pharetra volutpat ad blandit bibendum accumsan nec elit cras luctus primis ipsum gravida class congue.
                    
                    Vehicula etiam elementum finibus enim duis feugiat commodo adipiscing tortor tempor elit. Et mollis consectetur habitant turpis tortor consectetur adipiscing vulputate dolor lectus iaculis convallis adipiscing. Nam hendrerit dignissim condimentum ullamcorper diam morbi eget consectetur odio in sagittis.`,
                }
            ]
        );
    };

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