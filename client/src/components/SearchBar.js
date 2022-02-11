import * as React from 'react';
// import ReactDOM from 'react-dom';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'

const SearchBar = () => {
  return (
    <>
    <Stack mt={5} direction="row" justifyContent="center">
        <Button variant='outlined'><Typography style={{ textTransform: 'none' }}>Catégorie</Typography></Button>
        <TextField id="outlined-basic" label="Je recherche..." variant="outlined" />
        <TextField id="outlined-basic" label="Prix minimum" variant="outlined" />
        <TextField id="outlined-basic" label="Prix maximum" variant="outlined" />
        <TextField id="outlined-basic" label="Ville" variant="outlined" />
        </Stack>

    <Stack mt={2} mb={10} direction="row" justifyContent="center">
      <Button variant='contained'>Rechercher !</Button>
    </Stack>
   
    </>
  )}

  export default SearchBar;