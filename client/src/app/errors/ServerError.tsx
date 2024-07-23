import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerError() {
    const {state} = useLocation();
    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                <Typography variant="h2" gutterBottom color='secondary'>
                    {state.error.title}
                </Typography>
                <Divider/>
                <Typography variant="body1">{state.error.detail || 'Internal server error'}</Typography>
                </>
            ) : 
            <Typography variant="h5"gutterBottom>Server Error</Typography>
            }
        </Container>
    );
}