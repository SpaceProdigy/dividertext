import { Box, Typography, useMediaQuery } from "@mui/material";

import {
  M_Wrapper,
  M_WrapperDescription,
  M_WrapperTitle,
} from "./About.styled";
import PropTypes from "prop-types";

export function About({ arr }) {
  const matches400 = useMediaQuery("(min-width:400px)");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: 6,
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {arr.map(({ title, description, imageUrl, id }, index) => (
          <M_Wrapper
            id={id}
            key={index}
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            imageurl={imageUrl}
          >
            <M_WrapperTitle
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 1 }}
            >
              <Typography
                textAlign="center"
                whiteSpace={matches400 ? "nowrap" : "wrap"}
                variant="h5"
              >
                {title}
              </Typography>
            </M_WrapperTitle>

            <M_WrapperDescription
              matches400={String(matches400)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <Typography textAlign="center" variant="subtitle2" component="p">
                {description}
              </Typography>
            </M_WrapperDescription>
          </M_Wrapper>
        ))}
      </Box>
    </>
  );
}

About.propTypes = {
  arr: PropTypes.array,
};
