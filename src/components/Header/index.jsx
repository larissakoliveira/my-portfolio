import { NavBarDivSection } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { Center, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";

import { AppBar, Toolbar, MenuItem, Badge, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  appbar: {
    // backgroundColor: "var(--background-main-color)",
    fontFamily: "var(--font-navbar)",
    minHeight: "80px",
    maxHeight: "90px",
    lineHeight: "100%",
    color: "var(--font-color-navbar)",
    display: "flex",
    flexWrap: "wrap",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(#000000, #212529)",
    opacity: "0.92",
  },
  toolbar: {
    minHeight: "80px",
    maxHeight: "90px",
    lineHeight: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "22px",
    color: "var(--font-color-navbar)",
    fontWeight: "bold",
    fontFamily: "var(--font-navbar)",
    padding: "12px",

    "@media (max-width: 860px)": { padding: "10px", fontSize: "18px" },
    "@media (max-width: 710px)": { padding: "9px", fontSize: "16px" },
    "@media (max-width: 635px)": { padding: "8px", fontSize: "15px" },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <MenuItem className={classes.title}>
            <a style={{ textDecoration: "none", color: "#fff" }} href="#start">
              &lt;/início&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#projects"
            >
              &lt;/projetos&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#aboutMe"
            >
              &lt;/sobre&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#contacts"
            >
              &lt;/contatos&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.canva.com/design/DAE0_KfjgXE/khXvmYofXc7husDQzZHq-w/view?utm_content=DAE0_KfjgXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            >
              &lt;/cv português&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.canva.com/design/DAE_MNBHv6s/WsPYVH9Z32AojRUq00DijA/view?utm_content=DAE_MNBHv6s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            >
              &lt;/cv inglês&gt;
            </a>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
