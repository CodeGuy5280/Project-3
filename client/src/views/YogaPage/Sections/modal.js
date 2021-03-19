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
import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";
export default function MeditationModal({img, title, description, video}) {
  const classes = useStyles();

  const [AdvancedModal3, setAdvancedModal3] = React.useState(false);
  const [classicModal, setClassicModal] = React.useState(false);
  const [AdvancedModal2, setAdvancedModal2] = React.useState(false);
  return (
    <div>
        {/* <GridContainer justify="center"> */}
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <Button
                    color="transparent"
                    size
                    onClick={() => {
                        setClassicModal(true);
                    }}
                >
                    <GridItem xs={12} sm={12} md={12}>
                        <img src={img} alt={description} width="75%" height="250"></img>
                    </GridItem>
                </Button>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setClassicModal(false)}
                    aria-labelledby={title}
                    aria-describedby={description}
                >
                    <DialogTitle
                        id={title}
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setClassicModal(false)}
                        >
                            <Close className={classes.modalClose} />
                        </IconButton>
                    
                        <h4 className={classes.modalTitle}>{title}</h4>
                    </DialogTitle>
                
                    <DialogContent
                        id={description}
                        className={classes.modalBody}
                    >
                        <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </DialogContent>

                    <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                            Favorite
                        </Button>
                    </DialogActions>
                </Dialog>
            </GridItem>
        {/* </GridContainer> */}
    </div>
  );
}