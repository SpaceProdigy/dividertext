import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { FormWrapper } from "./SignIn.styled";
import { useEffect, useState } from "react";
import { loginSchema } from "../../../shemas/authShema";

const SignIn = () => {
  const [actualStateInputs, setActualStateInputs] = useState(
    JSON.parse(localStorage.getItem("signin")) &&
      JSON.parse(localStorage.getItem("signin"))
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    defaultValues: actualStateInputs && actualStateInputs,
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setActualStateInputs();
    localStorage.removeItem("signin");
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("signin")) || actualStateInputs) {
      localStorage.setItem("signin", JSON.stringify(actualStateInputs));
    }
  }, [actualStateInputs]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Sing in
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel variant="outlined">Login</InputLabel>
          <OutlinedInput
            label="Login"
            placeholder="Enter your login or email"
            onInput={(e) =>
              setActualStateInputs((prevState) => {
                return { ...prevState, login: e.target.value };
              })
            }
            {...register("login")}
          />
          <FormHelperText sx={{ minHeight: 40 }} error>
            {errors.login?.message}
          </FormHelperText>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel variant="outlined">Password</InputLabel>
          <OutlinedInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />

          <FormHelperText sx={{ minHeight: 40 }} error>
            {errors.password?.message}
          </FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth size="large">
          Submit
        </Button>
      </FormWrapper>
    </>
  );
};

export default SignIn;
