import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

const ProductCard = (props) => {
    return (
        <Paper>
            <img src="https://picsum.photos/960/540?random=0" alt="product"/>
            <Typography sx={{margin:'20px', fontSize:'20pt'}}>{props.name}</Typography>
                <Typography sx={{marginRight: '20px', fontSize:'15pt', textAlign:'right'}}>{props.price} €</Typography>
            <Typography sx={{margin:'20px', maxWidth:'75%', paddingBottom:'30px'}}>{props.description}</Typography>
        </Paper>
    );
};

export default ProductCard;