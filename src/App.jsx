import { useContext, useEffect, useState } from "react";

import { Box, Container, Fade, List, Typography } from "@mui/material";
import { MultilineInput } from "./components/MultilineInput/MultilineInput";

import { RootContext } from "./main";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { QuantityInput } from "./components/QuantityInput/QuantityInput/QuantityInput";
import { TextItem } from "./components/TextItem/TextItem";

function App() {
  const { theme, modeTheme, setModeTheme } = useContext(RootContext);

  const localText = JSON.parse(localStorage.getItem("text"));
  const localQuantity = JSON.parse(localStorage.getItem("quantity"));

  const [text, setText] = useState(localText);
  const [divide, setDivide] = useState(Number(localQuantity));
  const [part, setPart] = useState([]);

  useEffect(() => {
    const string = JSON.stringify(text);
    const quantity = JSON.stringify(divide);
    localStorage.setItem("text", string);
    localStorage.setItem("quantity", quantity);
  }, [divide, text]);

  useEffect(() => {
    const dividePart = () => {
      if (divide > 0) {
        setPart([]);
        for (let i = 0; i < text.length; i += divide) {
          const newText = text.slice(i, i + divide);
          setPart((prevState) => [...prevState, newText]);
        }
      }
    };

    dividePart();
  }, [divide, text]);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            margin: "20px 0 40px",
          }}
        >
          <ThemeButton setModeTheme={setModeTheme} modeTheme={modeTheme} />
          <Box style={{ marginBottom: 20 }}>
            <Typography variant="h3">Divider text</Typography>
          </Box>
          <QuantityInput divide={divide} setDivide={setDivide} />
          <MultilineInput text={text} setText={setText} />
          <Fade in={text.length > 0}>
            <Box style={{ margin: 20 }}>
              <Typography variant="h5"> Parts divided text</Typography>
            </Box>
          </Fade>

          <List
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            {divide > 0 &&
              part.map((item, index) => (
                <TextItem key={index} theme={theme} item={item} />
              ))}
          </List>
        </Box>
      </Container>
    </>
  );
}

export default App;
