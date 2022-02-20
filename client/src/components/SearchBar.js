import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CategoryButton from './CategoryButton'

export default function SearchBar() {
	return (
		<>
			<Container sx={{display:'flex', alignItems:'center', mb:10}}>
				<Box
					sx={{display:'flex', alignItems:'center', mb:5, textAlign:'center'}}
					component="form"
					noValidate
					autoComplete="off"
				>
					<Stack spacing={0.5} direction='row'>
						<CategoryButton sx={{width:50}}/>
						<TextField id="outlined-basic" label="Je recherche..." variant="outlined" sx={{width:'20vw'}}/>
						<TextField id="outlined-basic" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Prix min" variant="outlined"  sx={{width:'10vw'}}/>
						<TextField id="outlined-basic" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Prix max" variant="outlined" sx={{width:'10vw'}}/>
						<TextField id="outlined-basic" label="Ville" variant="outlined"/>
						<Button variant='contained' sx={{alignItems:'center', backgroundColor:'orange'}}>Rechercher</Button>
					</Stack>
				</Box>
			</Container>
		</>
	);
};