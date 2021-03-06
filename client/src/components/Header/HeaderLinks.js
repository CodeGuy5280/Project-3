/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
// import LoginButton from "components/LoginButton/login-button.js";
// import LogOutButton from "components/LogoutButton/logout-button.js";

// sections for this page
import ZenPage from "../../views/ZenPage/ZenPage.js"
import Profile from "client\src\views\ProfilePage\ProfilePage.js"

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            
            // <Link to={"/login-page"} className={classes.dropdownLink}>
            //   Login
            // </Link>,
            <Link to={"/profile-page"} className={classes.dropdownLink}>
              Profile Page
            </Link>,
            <Link to={"/favorites-page"} className={classes.dropdownLink}>
            Favorites
            </Link>,
            <Link to={"/mantra-page"} className={classes.dropdownLink}>
            Mantra
            </Link>,
            <Link to={"/yoga-page"} className={classes.dropdownLink}>
            Yoga
            </Link>,
            <Link to={"/zen-page"} className={classes.dropdownLink}>
            Zen
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Logout
            </Link>,

          ]}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            // href="https://twitter.com/CreativeTim?ref=creativetim"
            // target="_blank"
            href="https://twitter.com/W_O_Meditation"
            target="_blank" e5205851c0b3a5c7a14d9bacc8f2cfceb095e71a
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"

            // href="https://www.facebook.com/CreativeTim?ref=creativetim"
            // target="_blank"
            href="https://www.facebook.com/worldof.meditation.9/"
            target="_blank" e5205851c0b3a5c7a14d9bacc8f2cfceb095e71a
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"

            // href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            // target="_blank"
            href="https://www.instagram.com/worldofmeditation21/"
            target="_blank" e5205851c0b3a5c7a14d9bacc8f2cfceb095e71a
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
