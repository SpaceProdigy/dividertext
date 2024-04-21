import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import PropTypes from "prop-types";

import HomeIcon from "@mui/icons-material/Home";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { StyledNavLink } from "./DrawerMenu.styled";

// const routeFunc = (route) => {
//   if (route === "Home") {
//     return "/";
//   }

//   return `/${route.toLowerCase()}`;
// };

export default function DrawerMenu({ toggleDrawer, open }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Divider"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <StyledNavLink to={"/divider"}>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Home" && <HomeIcon />}
                  {text === "Divider" && <TextSnippetIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </StyledNavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

DrawerMenu.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
