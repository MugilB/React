import React from "react";
import { Button,Typography,Container } from "@mui/material";

function Home()
{
    return(
        <Container>
            <Typography>
                This is My first Material UI
            </Typography>
            <Button variant="contained" color="primary">Click Me!</Button>
        </Container>
    );
}

export default Home;