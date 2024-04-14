import { useEffect, useState } from "react";
import { Box, Fade, IconButton, ListItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const TextItem = ({ theme, item }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000);
    }
  }, [copied]);

  return (
    <ListItem
      style={{
        width: "100%",
        listStyle: "none",
        padding: 0,
      }}
    >
      <Box style={{ width: "100%" }}>
        <Box
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Box>
            <Typography variant="caption" color={theme.palette.success.main}>
              Length: {item.length}
            </Typography>
          </Box>
          <Box>
            <CopyToClipboard text={item} onCopy={() => setCopied(true)}>
              <IconButton
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Fade in={copied}>
                  <Box style={{ position: "absolute" }}>
                    <CheckCircleOutlineIcon color="success" />
                  </Box>
                </Fade>
                <Fade in={!copied}>
                  <Box>
                    <ContentCopyIcon fontSize="small" />
                  </Box>
                </Fade>
              </IconButton>
            </CopyToClipboard>
          </Box>
        </Box>
        <Box
          style={{
            width: "100%",
            maxHeight: 300,
            overflowY: "auto",
            border: `1px solid ${theme.palette.text.primary}`,
            borderRadius: 5,
            wordBreak: "break-all",
            padding: 16,
          }}
        >
          <Typography>{item}</Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

TextItem.propTypes = {
  theme: PropTypes.object.isRequired,
  item: PropTypes.string.isRequired,
};
