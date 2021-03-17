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

// const imgStyle = {
//     width: "100%",
//     height: "auto",
//     aspectRatio: Attr(100)/Attr("auto")
// };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function YogaPage(props) {

    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    //   const [classicModal, setClassicModal] = React.useState(false);
    return (
        <div>
            <Header
                color="transparent"
                brand="World of Meditation"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
          />
            <Parallax small filter image={require("assets/img/gorgeous.jpeg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
              <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                      <img src={profile} alt="..." className={imageClasses} />
                      </div>
                      <div className={classes.name}>
                      <h3 className={classes.title}>Yoga Meditation</h3>
                      <h6>Relax</h6>
                        </div>
                    </div>
                </GridItem>
                </GridContainer>
                <div className={classes.description}>
                  <p>
                    “My mind is brilliant. My body is healthy. My spirit is tranquil.”{" "}
                  </p>
                  </div>
                  <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                  alignCenter
                  color="success"
                  tabs={[
        {
                  tabButton: "Beginner",
                  tabIcon: OndemandVideoIcon,
                  tabContent: (
                  <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/4C-gxOE0j7s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogab5"></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/A0pkEgZiRG4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogab10"></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/m756Gz8de4M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogab15"></iframe>
                  </GridItem>
                  </GridContainer>
           )
              },
                {
                   tabButton: "Intermediate",
                   tabIcon: SpaIcon,
                   tabContent: (
                   <GridContainer justify="center">
                   <GridItem xs={12} sm={12} md={12}>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/JubmfxrWLMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogai5"></iframe>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/bGI-issML4c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogai10"></iframe>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/q1kphX58NTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogai15"></iframe>
                   </GridItem>
                   </GridContainer>
          )
             },
              {
                   tabButton: "Advanced",
                   tabIcon: TrendingUpIcon,
                  tabContent: (
                  <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/msgu-gz4oww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogaa5"></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/oar85e9GdLw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogaa10"></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Kp2rcl-PlkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="yogaa15"></iframe>
                  </GridItem>
                  </GridContainer>
           )
              }
               ]}
                 />
                    </GridItem>
                     </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}