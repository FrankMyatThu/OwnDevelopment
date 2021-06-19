import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
                <TextField id="txtContractNo" label="Contract No" variant="outlined" className={classes_controls.textField} />
            </Grid>
            <Grid item xs={4}>
                <TextField id="txtCustomer" label="Customer" variant="outlined" className={classes_controls.textField_Long} />
            </Grid>
            <Grid item xs={4}>
                <TextField id="txtSubContractor" label="Sub Contractor" variant="outlined" className={classes_controls.textField} />
            </Grid>
          </React.Fragment>
        );
      }

    return (
        <div>
            <form className={classes_forms.root} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>                
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