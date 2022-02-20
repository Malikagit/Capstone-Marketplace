import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function AddProductForm() {
	return (
		<>
            <Typography variant='h3' sx={{textAlign: 'center', mb:5}}>Ajouter un produit</Typography>
			<Container>
                <Grid container display="flex" direction="row" justifyContent="space-evenly" alignItems="center">
                    <Box
                        sx={{display:'flex', alignItems:'center', mb:5, textAlign:'center'}}
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <Stack spacing={0.5} direction='column' sx={{width: '30vw'}}>
                            <Button variant='outlined' sx={{alignItems:'center', borderColor:'lightgray', textTransform:'none', height:'44px'}}>Catégorie</Button>
                            <TextField id="outlined-basic" label="Titre" variant="outlined"/>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                />
                            <TextField id="outlined-basic" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Prix" variant="outlined"/>
                            <TextField id="outlined-basic" label="Ville" variant="outlined"/>
                            <Button variant='outlined' sx={{alignItems:'center', borderColor:'lightgray', textTransform:'none', height:'44px'}}>Ajouter une image</Button>
                            <Button variant='contained' sx={{alignItems:'center', backgroundColor:'orange', height:'56px'}}>Poster</Button>
                        </Stack>
                    </Box>
                </Grid>
			</Container>
		</>
	);
}