import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const S_WrapperTitle = styled(Box)`
  width: 90%;
  overflow-y: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb"};
  padding: 15px;
  border-radius: 5px;
  scrollbar-width: thin;
`;

export const M_WrapperTitle = motion(S_WrapperTitle);

export const S_WrapperDescription = styled(Box)`
  height: ${({ matches400 }) => (matches400 === "false" ? "70px" : "none")};
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`;

export const M_WrapperDescription = motion(S_WrapperDescription);

export const S_Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  height: ${({ matches400 }) => (matches400 === "true" ? "400px" : "300px")};
  max-width: ${({ matches400 }) => (matches400 === "true" ? "700px" : "")};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const M_Wrapper = motion(S_Wrapper);
