import { Box, Fade, List, Typography } from "@mui/material";
import { QuantityInput } from "../../components/QuantityInput/QuantityInput/QuantityInput";
import { MultilineInput } from "../../components/MultilineInput/MultilineInput";
import { TextItem } from "../../components/TextItem/TextItem";
import { useContext, useEffect, useState } from "react";
import { RootContext } from "../../main";

const Divider = () => {
  const { theme } = useContext(RootContext);

  const localText = JSON.parse(localStorage.getItem("text"));
  const localQuantity = JSON.parse(localStorage.getItem("quantity"));

  const [text, setText] = useState(localText ?? "");
  const [divide, setDivide] = useState(
    localQuantity ? Number(localQuantity) : ""
  );
  const [part, setPart] = useState([]);

  useEffect(() => {
    if (text.length > 0) {
      const string = JSON.stringify(text);
      localStorage.setItem("text", string);
    } else {
      localStorage.removeItem("text");
    }

    if (divide > 0) {
      const quantity = JSON.stringify(divide);
      localStorage.setItem("quantity", quantity);
    } else {
      localStorage.removeItem("quantity");
    }
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

  useEffect(() => {
    if (text.length / 100 > divide && divide !== "") {
      setDivide(Math.ceil(text.length / 100));
    }
  }, [divide, text.length]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          margin: "20px 0 40px",
        }}
      >
        <Box style={{ marginBottom: 20 }}>
          <Typography variant="h3">Divider text</Typography>
        </Box>
        <QuantityInput
          divide={divide}
          setDivide={setDivide}
          text={text}
          theme={theme}
        />
        <MultilineInput text={text} setText={setText} theme={theme} />
        <Fade in={text.length > 0 && divide > 0}>
          <Box style={{ margin: 20 }}>
            <Typography variant="h5"> Parts divided text</Typography>
          </Box>
        </Fade>
        <Fade in={text.length > 0 && divide > 0}>
          <List
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            {divide > 0 &&
              part.length > 0 &&
              part.map((item, index) => (
                <TextItem key={index} theme={theme} item={item} />
              ))}
          </List>
        </Fade>
      </Box>
    </>
  );
};

export default Divider;
