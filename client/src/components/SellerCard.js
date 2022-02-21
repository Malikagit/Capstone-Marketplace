import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Star from '@mui/icons-material/Star';

const SellerCard = (props) => {
    const styleSellerCard = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    return (
        <Paper style={styleSellerCard}>
            <Card><br />
                <Grid container sx={{ justifyContent: "center", display: "flex" }}>
                    <Avatar
                        alt={props.name}
                        src={props.imagePath}
                        sx={{ width: 64, height: 64, marginBottom: '10px' }}
                    />
                </Grid>
                <Typography>{props.name}</Typography>
                <Typography sx={{ marginLeft: '10px' }}>{props.rating}<Star sx={{ pt: 1.6, color: 'orange' }} /></Typography><br />
                <Button variant='contained' sx={{ alignItems: 'center', backgroundColor: 'orange', textTransform: 'none' }}>Envoyer un message</Button>
            </Card>
        </Paper>
    );
};

export default SellerCard;