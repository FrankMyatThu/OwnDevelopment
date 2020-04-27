import React, {useState} from "react";
import { Grid, TextField, withStyles, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import useForm from "./useForm";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
          }
    },
    formControl:{
        margin: theme.spacing(1),
        minWidth: 230,
    }
})

const initialFieldValues = {
    FullName: '',
    mobile: '',
    email: '', 
    age: '',
    bloodGroup: '',
    address: ''
}

const DCandidateForm = ({classes, ...props}) => {    
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    // material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return(
        <form autoComplete="off" noValidate className={classes.root}>
            <Grid container >
                <Grid item xs = {6}>
                    <TextField 
                        name="fullName"
                        variant="outlined"
                        label="Full Name" 
                        value={values.FullName}
                        onChange= {handleInputChange} 
                    />
                    <TextField 
                        name="email"
                        variant="outlined"
                        label="Email" 
                        value={values.email}
                        onChange= {handleInputChange} 
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel}>Blood Group</InputLabel>
                        <Select 
                            name="bloodGroup"
                            value={values.bloodGroup}
                            onChange={handleInputChange}
                            labelWidth={labelWidth} >
                            <MenuItem value="" >Select Blood Group</MenuItem>
                            <MenuItem value="A+">A +ve</MenuItem>
                            <MenuItem value="A-">A -ve</MenuItem>
                            <MenuItem value="B+">B +ve</MenuItem>
                            <MenuItem value="B-">B -ve</MenuItem>
                            <MenuItem value="AB+">AB +ve</MenuItem>
                            <MenuItem value="AB-">AB -ve</MenuItem>
                            <MenuItem value="O+">O +ve</MenuItem>
                            <MenuItem value="O-">O -ve</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        name="mobile"
                        variant="outlined"
                        label="Mobile" 
                        value={values.mobile}
                        onChange= {handleInputChange} 
                    />
                    <TextField 
                        name="age"
                        variant="outlined"
                        label="Age" 
                        value={values.age}
                        onChange= {handleInputChange} 
                    />
                    <TextField 
                        name="address"
                        variant="outlined"
                        label="Address" 
                        value={values.address}
                        onChange= {handleInputChange} 
                    />
                </Grid>
            </Grid>
        </form>
    );
}

export default withStyles(styles) (DCandidateForm);
