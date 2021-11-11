import { useState, useEffect, } from 'react';
import Router from 'next/router';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, Backdrop, CircularProgress, Alert, } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

const Login = ({ getUser, login, session, }) => {
    const [credentials, setCredentials] = useState({});
    const onLogin = (e) => {
        e.preventDefault();
        login(credentials).then((result) => {
            if (result)
                Router.push('/members');
        });
    };

    useEffect(() => {
        getUser();
        if (session.user)
            Router.push('/members');
    }, [session.user]);

    return (
        <>
            {session.fail && <Alert severity="error" onClose={() => { }}>Username/password incorrect</Alert>}
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <Box component="form" noValidate onSubmit={onLogin} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={credentials.username}
                                    defaultValue=""
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value, })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={credentials.password}
                                    defaultValue=""
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value, })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Remember this device"
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={onLogin}>Sign In</Button>
                    </Box>
                </Box>
            </Container>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={session.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}; //end of the component Login
export default Login;