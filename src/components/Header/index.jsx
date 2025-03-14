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
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyItems: "center",
    justifyContent: "space-evenly",
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
            <a style={{ textDecoration: "none", color: "#fff" }} 
            href="#"
            >
              &lt;/start&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#projects"
            >
              &lt;/projects&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#aboutMe"
            >
              &lt;/about&gt;
            </a>
          </MenuItem>
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#contacts"
            >
              &lt;/contacts&gt;
            </a>
          </MenuItem>
          {/* <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.canva.com/design/DAE0_KfjgXE/khXvmYofXc7husDQzZHq-w/view?utm_content=DAE0_KfjgXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            >
              &lt;/portuguese CV&gt;
            </a>
          </MenuItem> */}
          <MenuItem className={classes.title}>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1sEJVxlw9z01AjpSo5VUDYKdOYU6krT2K/view?usp=drive_link"
            >
              &lt;/resume&gt;
            </a>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
