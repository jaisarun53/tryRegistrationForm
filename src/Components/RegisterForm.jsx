import React from "react";
import { Formik, validateYupSchema } from "formik";
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
        validateYupSchema={registerValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h3">Register</Typography>
              <FormControl>
                <TextField
                  label="First name"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" variant="contained" color="success">
                Sign up
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
