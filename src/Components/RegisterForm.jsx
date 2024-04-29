import React from "react";
import { Formik, validateYupSchema, onSubmit } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Password } from "@mui/icons-material";
import { registerValidationSchema } from "./registerUserValidationSchema";
const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          location: "",
          gender: "",
          Password: "",
          confirmPassword: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h3">Register</Typography>
            <FormControl>
              <TextField
                label="First name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Last name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>

            {/* {console.log(formik.errors)} */}
            <Button type="submit" color="success" variant="contained">
              Sign up
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
