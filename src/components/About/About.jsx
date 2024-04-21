import { Box, Typography, useMediaQuery } from "@mui/material";
import { arrAboutUs } from "../../utility/arrAboutUs";
import PropTypes from "prop-types";

export function About({ theme }) {
  const matches400 = useMediaQuery("(min-width:400px)");

  return (
    <>
      <Box
        sx={{
          marginTop: 6,
          marginBottom: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        {arrAboutUs.map(({ title, description, imageUrl }, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              position: "relative",
              backgroundImage: `url(${imageUrl})`,
              height: matches400 ? 400 : 300,
              maxWidth: matches400 ? 700 : "none",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 1,
            }}
          >
            <Box
              sx={{
                height: !matches400 ? 90 : "none",
                overflowY: "auto",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb",
                padding: 1.5,
                borderRadius: 2,
                scrollbarWidth: "thin",
              }}
            >
              <Typography
                textAlign="center"
                whiteSpace={matches400 ? "nowrap" : "wrap"}
                variant="h5"
              >
                {title}
              </Typography>
            </Box>
            <Box
              sx={{
                height: !matches400 ? 70 : "none",
                overflowY: "auto",
                position: "absolute",
                bottom: 0,
                width: "100%",
                background:
                  theme.palette.mode === "dark" ? "#000000bb" : "#ffffffbb",
                padding: 1.5,
                scrollbarWidth: "thin",
              }}
            >
              <Typography textAlign="center" variant="subtitle2" component="p">
                {description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

About.propTypes = {
  theme: PropTypes.object,
};
