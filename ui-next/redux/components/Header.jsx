import { Typography, Grid, Box, Button, } from '@mui/material';
import { makeStyles, } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    button: { textTransform: 'none', },
}));

const Header = ({ username, logout, }) => {
    const { button, } = useStyles();
    return (
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container justifyContent="flex-start">
                        <Typography>{username}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="flex-end">
                        <Button onClick={logout} className={button}>
                            Logout
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Header;