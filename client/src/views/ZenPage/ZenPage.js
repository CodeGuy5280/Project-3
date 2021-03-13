import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SpaIcon from '@material-ui/icons/Spa';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import Button from "components/CustomButtons/Button.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Intermediate from "views/MantraPage/Sections/Intermediate.js";

import profile from "assets/img/YogaMountain.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import javaStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);