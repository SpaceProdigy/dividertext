import { Box, Fade, List, Typography } from "@mui/material";
import { QuantityInput } from "../../components/QuantityInput/QuantityInput/QuantityInput";
import { MultilineInput } from "../../components/MultilineInput/MultilineInput";
import { TextItem } from "../../components/TextItem/TextItem";
import { useContext, useEffect, useRef, useState } from "react";
import { RootContext } from "../../main";
import { textDividerDescription } from "../../utility/dividerInfo";
import {
  BoxBorder,
  ImageBox,
  Title,
  WrapperDescription,
  WrapperImageBox,
  WrapperInfo,
} from "./Divider.styled";
import { ReactTyped } from "react-typed";
import { DummyLink, DummyText } from "../../components/Divider/Dummy/Dummy";
import { About } from "../../components/About/About";
import { motion } from "framer-motion";

const whereIsUsed = textDividerDescription.whereItCanBeUsed.map((el) => el);
const description = textDividerDescription.description.slice(
  0,
  textDividerDescription.description.indexOf("<ul")
);
const descriptionNavigate = textDividerDescription.description.slice(
  textDividerDescription.description.indexOf("<ul")
);

const Divider = () => {
  const [typed, setTyped] = useState();
  const divRef = useRef(null);
  const divLinkRef = useRef(null);
  const [divSize, setDivSize] = useState(null);
  const [isTypeng, setIsTypeng] = useState(false);

  const { theme } = useContext(RootContext);

  const localText = JSON.parse(localStorage.getItem("text"));
  const localQuantity = JSON.parse(localStorage.getItem("quantity"));

  const [text, setText] = useState(localText ?? "");
  const [divide, setDivide] = useState(
    localQuantity ? Number(localQuantity) : ""
  );
  const [part, setPart] = useState([]);

  useEffect(() => {
    setDivSize({
      widthT: divRef?.current.offsetWidth,
      heightT: divRef?.current.offsetHeight,
      widthL: divLinkRef?.current.offsetWidth,
      heightL: divLinkRef?.current.offsetHeight,
    });
  }, []);

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
        <div style={{ display: "flex", gap: 10 }}>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Title variant="h3">Divider </Title>
          </motion.div>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Title variant="h3">text</Title>
          </motion.div>
        </div>
        <WrapperInfo>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <WrapperImageBox
              onClick={() => {
                setIsTypeng(!isTypeng);
                typed?.toggle();
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3 }}
              >
                <ImageBox />
              </motion.div>
            </WrapperImageBox>
            <BoxBorder />
          </motion.div>

          <motion.div
            ref={divRef}
            initial={{ opacity: 0 }}
            animate={{
              height: isTypeng ? divSize?.heightT : 0,
              width: divSize?.widthT,
              opacity: isTypeng ? 1 : 0,
              overflow: "hidden",
            }}
            transition={{ duration: 1 }}
          >
            <WrapperDescription>
              <ReactTyped
                strings={[description]}
                typeSpeed={40}
                typedRef={(typedInstance) => setTyped(typedInstance)}
                cursorChar={""}
                stopped={!isTypeng}
              />
              {!divSize && <DummyText />}
            </WrapperDescription>
          </motion.div>

          <div ref={divLinkRef} style={{ height: divSize?.heightL }}>
            <ReactTyped
              strings={[descriptionNavigate]}
              typeSpeed={40}
              cursorChar={""}
            />
            {!divSize && <DummyLink />}
          </div>
        </WrapperInfo>

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
        <About arr={whereIsUsed} />
      </Box>
    </>
  );
};

export default Divider;
