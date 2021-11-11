import { useEffect, useState, } from 'react';
import Router from 'next/router';
import { Container, Grid, Box, Backdrop, CircularProgress, } from '@mui/material';
import Header from './Header';
import Table from './Table';
import MemberForm from './MemberForm';

const MembersPage = ({ fetchMembers, members = [], session, create, logout, }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!session.user)
            Router.push('/');
        else {
            fetchMembers(session);
            setLoaded(true);
        }
    }, [JSON.stringify(session.user)]);

    if (!loaded)
        return (
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={!session.user}>
                <CircularProgress color="inherit" />
            </Backdrop>
        );

    return (
        <>
            <Container component="main">
                <Header username="Sarah" logout={logout} />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Grid container justifyContent="flex-start">
                                <MemberForm create={create} />
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Table members={members} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={session.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};
export default MembersPage;