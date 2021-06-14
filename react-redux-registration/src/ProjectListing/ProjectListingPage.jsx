import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(SNo, ContractNo, Customer, ProjectDescription, ContactPerson, LastOrderPlaced, SaleInCharge, ActivityStatus, ProjectStatus, Action) {
    return { SNo, ContractNo, Customer, ProjectDescription, ContactPerson, LastOrderPlaced, SaleInCharge, ActivityStatus, ProjectStatus, Action };
}

const rows = [
    createData(1, 'H11001', 'Soil Build Pte Ltd', 'Fty@ Tuas Sth Ave 2', 'Mr Ang', '17/02/2011', 'Lilian Liew', 'Active', '	COMPLETED', ''),
    createData(1, 'H11001', 'Soil Build Pte Ltd', 'Fty@ Tuas Sth Ave 2', 'Mr Ang', '17/02/2011', 'Lilian Liew', 'Active', '	COMPLETED', ''),
    createData(1, 'H11001', 'Soil Build Pte Ltd', 'Fty@ Tuas Sth Ave 2', 'Mr Ang', '17/02/2011', 'Lilian Liew', 'Active', '	COMPLETED', ''),
    createData(1, 'H11001', 'Soil Build Pte Ltd', 'Fty@ Tuas Sth Ave 2', 'Mr Ang', '17/02/2011', 'Lilian Liew', 'Active', '	COMPLETED', ''),
];

export default function ProjectListingPage() {
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell align="right">Contract No</TableCell>
                            <TableCell align="right">Customer</TableCell>
                            <TableCell align="right">Project Description</TableCell>
                            <TableCell align="right">Contact Person</TableCell>
                            <TableCell align="right">Last Order Placed</TableCell>
                            <TableCell align="right">Sale In-Charge</TableCell>
                            <TableCell align="right">Activity Status</TableCell>
                            <TableCell align="right">Project Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.ContractNo}>
                                <TableCell align="left">
                                    {row.SNo}
                                </TableCell>
                                <TableCell align="right">{row.ContractNo}</TableCell>
                                <TableCell align="right">{row.Customer}</TableCell>
                                <TableCell align="right">{row.ProjectDescription}</TableCell>
                                <TableCell align="right">{row.ContactPerson}</TableCell>
                                <TableCell align="right">{row.LastOrderPlaced}</TableCell>
                                <TableCell align="right">{row.SaleInCharge}</TableCell>
                                <TableCell align="right">{row.ActivityStatus}</TableCell>
                                <TableCell align="right">{row.ProjectStatus}</TableCell>
                                <TableCell align="right">{row.Action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div><Link to="/ProjectFlatForm">Project Flat Form Page</Link></div>
        </div>

    );
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedProjectListingPage = connect(mapState, actionCreators)(ProjectListingPage);
export { connectedProjectListingPage as ProjectListingPage };