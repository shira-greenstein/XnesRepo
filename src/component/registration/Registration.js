//React
import React, { useState } from "react";

//React-Router
// import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";

//Style
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useStyles } from "./Registration.style";
import Button from "@mui/material/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

//Const
import { fields } from "./consts";
import { postCustomerToCustomers } from "../../redux/actions/customers";

function Registration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [register, setRegister] = useState();

  //   const numberPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //   const isPhoneMatch = (phone) => {
  //     if (numberPhone.test(phone)) return true;
  //     return false;
  //   };

  const validators = {
    fullName: [
      ["required", "maxStringLength:20"],
      ["שדה חובה", "עד 20 תווים"],
    ],
    // email: [
    //   ["required", "isEmail"],
    //   ["שדה חובה", "מייל לא תקין"],
    // ],
    // phone: [
    //   ["required", "isPhoneMatch"],
    //   ["שדה חובה", "מספר לא תקין"],
    // ],
  };

  //   useEffect(() => {
  //     ValidatorForm.addValidationRule("isPhoneMatch", (phone) =>
  //       isPhoneMatch(phone)
  //     );
  //   }, []);

  const handleChange = (field, value) => {
    setRegister({ ...register, [field]: value });
  };

  const handleSave = async () => {
    try {
      await dispatch(postCustomerToCustomers(register));
      //   navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }} className={classes.root}>
        <span>פרטים:</span>
        <ValidatorForm onSubmit={handleSave}>
          {Object.keys(fields).map((key) =>
            !validators[key] ? (
              <TextField
                key={key}
                label={fields[key]}
                value={register && register[key] && register[key]}
                variant="outlined"
                className={classes.textField}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            ) : (
              <TextValidator
                key={key}
                className={classes.textField}
                margin="dense"
                label={fields[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                name="email"
                value={register && register[key] && register[key]}
                validators={validators[key][0]}
                errorMessages={validators[key][1]}
              />
            )
          )}
        </ValidatorForm>
        <div className={classes.wrapButton}>
          <Button
            variant="contained"
            className={classes.save}
            onClick={handleSave}
          >
            שמירה
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Registration;
