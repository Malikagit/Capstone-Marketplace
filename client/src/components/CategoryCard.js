import { Paper } from "@mui/material";
import { Typography } from "@mui/material";

const CategoryCard = (props) => {
    return (
        <Paper elevation={3}>
            <img src={props.imagePath} alt='Not found' className='img'/>
            <Typography textAlign="center">{props.name}</Typography>
        </Paper>
    );
};

export default CategoryCard;