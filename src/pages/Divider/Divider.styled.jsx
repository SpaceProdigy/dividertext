import { Box, Typography, styled } from "@mui/material";
import image from "../../pictures/helper.png";

export const WrapperInfo = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const WrapperDescription = styled(Box)`
  position: relative;
  background-color: ${({ theme }) =>
    theme.palette.grey[theme.palette.mode === "dark" ? 500 : 100]};
  border: 1px solid ${({ theme }) => theme.palette.action.active};
  padding: 20px;
  border-radius: 10px;
  margin-left: 40px;
  z-index: 5;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const WrapperImageBox = styled(Box)`
  position: absolute;
  padding: 5px;
  border-radius: 50%;
  left: 20px;
  top: -20px;
  background-color: ${({ theme }) =>
    theme.palette.grey[theme.palette.mode === "dark" ? 500 : 100]};
  z-index: 10;
  cursor: pointer;
`;

export const BoxBorder = styled(Box)`
  width: 52px;
  height: 52px;
  position: absolute;
  border: 2px solid ${({ theme }) => theme.palette.action.active};
  border-radius: 50%;
  left: 19px;
  top: -21px;
  z-index: 1;
`;

export const ImageBox = styled(Box)`
  width: 40px;
  height: 40px;
  background-image: url(${image});
  background-position: center;
  background-size: contain;
`;

export const Title = styled(Typography)``;
