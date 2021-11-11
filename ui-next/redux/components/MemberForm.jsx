import { useState, useEffect, } from 'react';
import { Grid, Box, TextField, Button, } from '@mui/material';
import { makeStyles, } from '@mui/styles';
import TextInputMasked from './TextInputMasked';

const useStyles = makeStyles((theme) => ({
    button: { textTransform: 'none', },
}));
const regexPatternSSN = /(?:\d{3})-(?:\d{2})-(\d{4})/;

const MemberForm = ({ create, }) => {
    const [member, setMemberProperty] = useState({});
    const [valid, setValid] = useState(false);
    const { button, } = useStyles();

    const onClearInputs = () => {
        setMemberProperty({ firstName: '', lastName: '', address: '', ssn: '', });
    }; //end of the function 'onClearInputs'

    const onCreate = (e) => {
        e.preventDefault();
        try {
            create({ ...member });
        } catch (err) {
            console.log(err);
        } finally {
            onClearInputs();
        }; //end of the 'try-catch'
    }; //end of the function 'onCreate'

    useEffect(() => { //Check input validations, working as a 'componentDidUpdate'
        let allValid = true;
        [member?.firstName, member?.lastName, member?.address].map((field) => !field?.length > 0 ? (allValid = false) : null);
        if (!member?.ssn?.match(regexPatternSSN)) allValid = false;
        setValid(allValid);
    }, [JSON.stringify(member)]);

    return (
        <Box component="form" noValidate onSubmit={onCreate} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="firstName"
                        label="First name"
                        name="firstName"
                        autoComplete="firstName"
                        value={member.firstName}
                        defaultValue=""
                        variant="standard"
                        onChange={(e) => setMemberProperty({ ...member, firstName: e.target.value, })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last name"
                        name="lastName"
                        autoComplete="lastName"
                        value={member.lastName}
                        defaultValue=""
                        variant="standard"
                        onChange={(e) => setMemberProperty({ ...member, lastName: e.target.value, })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        value={member.address}
                        defaultValue=""
                        variant="standard"
                        onChange={(e) => setMemberProperty({ ...member, address: e.target.value, })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextInputMasked
                        required
                        fullWidth
                        id="ssn"
                        label="SSN"
                        name="ssn"
                        autoComplete="ssn"
                        value={member.ssn}
                        defaultValue=""
                        onChange={(e) => setMemberProperty({ ...member, ssn: e.target.value, })}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={button} onClick={onClearInputs}>Reset</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={button} onClick={onCreate} disabled={!valid}>Create</Button>
                </Grid>
            </Grid>
        </Box>
    );
}; //end of the component MemberForm
export default MemberForm;