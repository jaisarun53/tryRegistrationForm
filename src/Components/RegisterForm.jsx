import React from "react";
import { Formik, validateYupSchema } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
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
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              width: "400px",
              gap: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
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

            <FormControl>
              <TextField label="Email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Location"
                {...formik.getFieldProps("location")}
              />
              {formik.touched.location && formik.errors.location ? (
                <FormHelperText error>{formik.errors.location}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Confirm password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <FormHelperText error>
                  {formik.errors.confirmPassword}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select label="Gender" {...formik.getFieldProps("gender")}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
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
