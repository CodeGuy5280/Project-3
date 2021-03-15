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
import MeditationModal from "views/MantraPage/Sections/MeditationModal.js";


import profile from "assets/img/buddha2.jpg";

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

export default function MantraPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [classicModal, setClassicModal] = React.useState(false);
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
      <Parallax small filter image={require("assets/img/bg12.jpg")} />
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
                    <h3 className={classes.title}>Mantra Meditation</h3>
                    <h6>BREATH</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                "May my heart be kind, my mind fierce, and my spirit brave."{" "}
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
                            <MeditationModal 
                              img={require("assets/img/bg-mantra-b1.png")}
                              title="How to Transcend Meditation"
                              description="beginner1"
                              video="https://www.youtube-nocookie.com/embed/gMZ1nzQJZvU"
                            />
                            <MeditationModal 
                              img={require("assets/img/bg-mantra-b2.png")}
                              title="5 Minute Meditation"
                              description="beginner2"
                              video="https://www.youtube-nocookie.com/embed/vbVh43mTHF4"
                            />
                            <MeditationModal 
                              img={require("assets/img/bg-mantra-b3.png")}
                              title="OM Meditation"
                              description="beginner3"
                              video="https://www.youtube-nocookie.com/embed/vH11undyI2o"
                            />
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Intermediate",
                      tabIcon: SpaIcon,
                      tabContent: (
                          <GridContainer justify="center">
                            <MeditationModal 
                              img={require("assets/img/bg-mantra-i1.png")}
                              title="What Chanting a Mantra Can Do To You"
                              description="intermediate1"
                              video="https://www.youtube.com/embed/vd9j8uo6OSY"
                            />
                            <MeditationModal 
                              img={require("assets/img/bg-mantra-i2.png")}
                              title="Morning Mantra to Start Your Day"
                              description="intermediate2"
                              video="https://www.youtube.com/embed/8wtLiBZs87Y"
                            />
                            <MeditationModal 
                              img={require("assets/img/bg-mantra-i3.png")}
                              title="Guided Meditation on the Body, Space, and Awareness"
                              description="intermediate3"
                              video="https://www.youtube.com/embed/5GSeWdjyr1c"
                            />
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Advanced",
                      tabIcon: TrendingUpIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <MeditationModal 
                            img={require("assets/img/bg-mantra-a1.png")}
                            title="Deep 5 Minute OM Meditation"
                            description="advanced1"
                            video="https://www.youtube.com/embed/EkrCJb0I8Z0"
                          />
                          <MeditationModal 
                            img={require("assets/img/bg-mantra-a2.png")}
                            title="Chakra Cleansing"
                            description="advanced2"
                            video="https://www.youtube.com/embed/NmAHY_tg9Es"
                          />
                          <MeditationModal 
                            img={require("assets/img/bg-mantra-a3.png")}
                            title="Remove All Obstacles"
                            description="advanced3"
                            video="https://www.youtube.com/embed/wYVTagVDJLA"
                          />
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