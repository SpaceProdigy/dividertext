import { Box, Divider, Typography } from "@mui/material";
import { quotes } from "../../utility/quotes";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <>
      <Divider />
      <Box
        sx={{
          minHeight: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ margin: 2 }}>
          <Typography textAlign="center" variant="caption">
            {quote}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
