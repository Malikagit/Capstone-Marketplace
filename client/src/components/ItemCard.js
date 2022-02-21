import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PaymentsOutlined, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom/';

const ItemCard = (props) => {
    return (
        <Grid item xs={3}>
            <Link style={{ textDecoration: 'none' }} to="/product/">
                <Paper elevation={5}>
                    <img src={props.imagePath} alt='Not found' className='img' />
                    <Box padding={1}>
                        <Typography variant='h6'>{props.name}</Typography><br />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PaymentsOutlined sx={{ width: 13.5, color: 'green' }} /><Typography variant='body1' marginLeft={1} sx={{ color: 'orange', fontWeight: 'bold' }}>{props.price} €</Typography>
                        </Box><br />
                        <Box>
                            <Typography variant='body2'>{props.sellerName}</Typography>
                            <Typography variant="caption">{props.sellerRating}<Star sx={{ pt: 1.6, color: 'orange' }} /></Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </Grid>
    );
};

export default ItemCard;