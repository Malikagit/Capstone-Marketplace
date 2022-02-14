import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CategoriesBox = () => {
    
    const styleCateg = {
        height: "30px",
        color: "red"
	}

    return (
        <Container style={styleCateg}>
            <Box sx={{width:'10px', height:'10px'}}>
                <Typography>hello</Typography>
            </Box>
        </Container>
    )
}

export default CategoriesBox;