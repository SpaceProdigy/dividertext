import { Box, Typography, useMediaQuery } from "@mui/material";
import { arrAboutUs } from "../../utility/arrAboutUs";
import {
  M_Wrapper,
  M_WrapperDescription,
  M_WrapperTitle,
} from "./About.styled";

export function About() {
  const matches400 = useMediaQuery("(min-width:400px)");

  return (
    <>
      <Box
        sx={{
          marginTop: 6,
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {arrAboutUs.map(({ title, description, imageUrl }, index) => (
          <M_Wrapper
            key={index}
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            imageurl={imageUrl}
            matches400={String(matches400)}
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
