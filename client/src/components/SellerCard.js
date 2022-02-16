import { Paper } from "@mui/material"
import { Card } from "@mui/material"
import { Typography } from "@mui/material"
import { Star } from '@mui/icons-material';
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";

const SellerCard = (props) => {

    // const styleSellerPicture = {
    //     marginTop: '10px',
    //     borderRadius: '50%',
    //     height: '75px',
    //     width:'75px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent:'center',
    //     textAlign:'center',
    // }
    
    const styleSellerCard = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    }

    return (
        <Paper style={styleSellerCard}>
            <Card><br/>
            <Grid container sx={{ justifyContent: "center", display: "flex" }}>
                <Avatar
                    alt={props.name}
                    src={props.imagePath}
                    sx={{ width: 64, height: 64, marginBottom:'10px' }}
                />
            </Grid>
                <Typography>{props.name}</Typography>
                <Typography sx={{marginLeft:'10px'}}>{props.rating}<Star sx={{pt:1.6, color:'orange'}}/></Typography><br/>
                <Button variant='contained' sx={{alignItems:'center', backgroundColor:'orange', textTransform:'none'}}>Envoyer un message</Button>
            </Card>
        </Paper>
    )
}

export default SellerCard;