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

import { singUpSchema } from "../../../shemas/authShema";
import { useEffect, useState } from "react";
import { FormWrapper } from "./SignUp.styled";

const SignUp = () => {
  const [actualStateInputs, setActualStateInputs] = useState(
    JSON.parse(localStorage.getItem("signup")) &&
      JSON.parse(localStorage.getItem("signup"))
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(singUpSchema),
    mode: "onBlur",
    defaultValues: actualStateInputs ?? { login: "", email: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setActualStateInputs();
    localStorage.removeItem("signup");
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("signup")) || actualStateInputs) {
      localStorage.setItem("signup", JSON.stringify(actualStateInputs));
    }
  }, [actualStateInputs]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Sing up
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
          <InputLabel variant="outlined">Email</InputLabel>
          <OutlinedInput
            label="Email"
            type="email"
            placeholder="Enter your password"
            onInput={(e) =>
              setActualStateInputs((prevState) => {
                return { ...prevState, email: e.target.value };
              })
            }
            {...register("email")}
          />

          <FormHelperText sx={{ minHeight: 40 }} error>
            {errors.email?.message}
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

export default SignUp;
