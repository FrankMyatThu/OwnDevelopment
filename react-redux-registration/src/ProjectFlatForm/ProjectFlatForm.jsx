import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    textField_Long: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});

export default function ProjectFlatForm() {
    const classes_forms = useStyles();
    const classes_controls = styles();

    return (
        <div>
            <form className={classes_forms.root} noValidate autoComplete="off">
                <TextField id="txtContractNo" label="Contract No" variant="outlined" className={classes_controls.textField} InputProps={{ className: classes_controls.input }} />
                <TextField id="txtCustomer" label="Customer" variant="outlined" className={classes_controls.textField_Long} />
                <TextField id="txtSubContractor" label="Sub Contractor" variant="outlined" className={classes_controls.textField} />
            </form>
            <div><Link to="/ProjectListing">Project Listing Page</Link></div>
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

const connectedProjectFlatForm = connect(mapState, actionCreators)(ProjectFlatForm);
export { connectedProjectFlatForm as ProjectFlatForm };