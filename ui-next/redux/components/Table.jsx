import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, } from '@mui/material';

const TableComponent = ({ members, }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell align="right">Last name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">SSN</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.length > 0 ?
                        members.map((member) => (
                            <TableRow
                                key={member.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{member.firstName}</TableCell>
                                <TableCell align="right">{member.lastName}</TableCell>
                                <TableCell align="right">{member.address}</TableCell>
                                <TableCell align="right">{member.ssn}</TableCell>
                            </TableRow>
                        )) :
                        <TableRow key={'row-1'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" colSpan={4}>No members loaded</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default TableComponent;