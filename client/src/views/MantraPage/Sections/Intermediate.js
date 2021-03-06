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

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";
export default function Intermediate(props) {
  const classes = useStyles();

  const [classicModal, setClassicModal] = React.useState(false);
  const [BeginnerModal1, setBeginnerModal1] = React.useState(false);
  const [BeginnerModal2, setBeginnerModal2] = React.useState(false);
  return (
    <div>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <Button
                    color="transparent"
                    size
                    onClick={() => {
                        setBeginnerModal1(true);
                    }}
                >
                    <GridItem xs={12} sm={12} md={12}>
                        <img src={require("assets/img/bg-mantra-b1.png")} alt="beginner1" width="75%" height="250"></img>
                    </GridItem>
                </Button>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={BeginnerModal1}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setBeginnerModal1(false)}
                    aria-labelledby="beginnner1-title"
                    aria-describedby="beginner1-description"
                >
                    <DialogTitle
                        id="beginner1-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setBeginnerModal1(false)}
                        >
                            <Close className={classes.modalClose} />
                        </IconButton>
                    
                        <h4 className={classes.modalTitle}>How to Transcend Meditation</h4>
                    </DialogTitle>
                
                    <DialogContent
                        id="beginner1-description"
                        className={classes.modalBody}
                    >
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gMZ1nzQJZvU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </DialogContent>

                    <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                            Nice Button
                        </Button>
                        <Button
                            onClick={() => setBeginnerModal1(false)}
                            color="danger"
                            simple
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <Button
                    color="transparent"
                    size
                    onClick={() => setBeginnerModal2(true)}
                >
                    <img src={require("assets/img/bg-mantra-b2.png")} alt="beginner2" width="75%" height="250"></img>

                </Button>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={BeginnerModal2}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setClassicModal(false)}
                    aria-labelledby="beginner2-title"
                    aria-describedby="beginner2-description"
                >
                    <DialogTitle
                        id="beginner2-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setBeginnerModal2(false)}
                        >
                            <Close className={classes.modalClose} />
                        </IconButton>
                        
                        <h4 className={classes.modalTitle}>5 Minute Mantra Meditation</h4>
                    </DialogTitle>
                    <DialogContent
                        id="beginner2-description"
                        className={classes.modalBody}
                    >
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vbVh43mTHF4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                            Nice Button
                        </Button>
                        <Button
                            onClick={() => setBeginnerModal2(false)}
                            color="danger"
                            simple
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <Button
                color="transparent"
                size
                onClick={() => setClassicModal(true)}
                >
                    <img src={require("assets/img/bg-mantra-b3.png")} alt="beginner3" width="75%" height="250"></img>
                    
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
                aria-labelledby="beginner3-title"
                aria-describedby="beginner3-description"
                >
                <DialogTitle
                    id="beginner3-title"
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
                    <h4 className={classes.modalTitle}>OM Mantra</h4>
                </DialogTitle>
                <DialogContent
                    id="beginner3-description"
                    className={classes.modalBody}
                >
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vH11undyI2o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="beginner3"></iframe>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                    Nice Button
                    </Button>
                    <Button
                    onClick={() => setClassicModal(false)}
                    color="danger"
                    simple
                    >
                    Close
                    </Button>
                </DialogActions>
                </Dialog>
            </GridItem>
            
        </GridContainer>
    </div>
  );
}
