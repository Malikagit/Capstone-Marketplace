import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom/';

const CategoryCard = (props) => {
    return (
        <Link style={{textDecoration: 'none'}} to="/category/">
            <Paper elevation={3}>
                    <img src={props.imagePath} alt='Not found' className='img category-img' />
                    <Typography textAlign="center">{props.name}</Typography>
            </Paper>
        </Link>
    );
};

export default CategoryCard;