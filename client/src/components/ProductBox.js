import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import { useEffect, useState } from "react";
import SellerCard from './SellerCard';

const ProductBox = () => {

    const [seller, setSeller] = useState([])

    const getDataSeller = () => {
        setSeller( // à remplacer par fetch
            [
                {name: "Gabriel Gonzales", rating:"4.6", imagePath:"https://picsum.photos/200?random=0"},
            ]
        )
    }

    useEffect(() => {
        getDataSeller()
    }, [])

    return (
        <Container display="flex" direction="row" justifyContent="space-evenly" alignItems="center">
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 2">
                    {
                        seller.map(elem => {
                            return(
                                <SellerCard
                                    name={elem.name}
                                    imagePath={elem.imagePath}
                                    rating={elem.rating}
                                />
                            )
                        })
                    }
                </Box>
                <Box gridColumn="span 10">
                    <Paper>
                        hello
                    </Paper>
                </Box>
            </Box>
        </Box>
        </Container>
    )
}

export default ProductBox;