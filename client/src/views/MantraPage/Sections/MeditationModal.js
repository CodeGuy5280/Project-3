import React, { createContext, useReducer, useContext, useEffect } from "react";
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
import SvgIcon from '@material-ui/core/SvgIcon';

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteIconOutlined from "@material-ui/icons/FavoriteOutlined";
import FavoriteOutlineGrey from "views/MantraPage/Icons/FavoriteOutlineGrey.png";

// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// styles
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";

// Dependencies
import { useStoreContext } from "utils/GlobalState.js";
import { SET_CURRENT_MEDITATION, ADD_FAVORITE, REMOVE_FAVORITE } from "utils/actions.js";
import API from "utils/API"

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";
export default function MeditationModal({_id, img, title, description, video}) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [state, dispatch] = useStoreContext();

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      meditation: state.currentMeditation
    });
    console.log(state.currentMeditation)
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      meditation: state.currentMeditation,
      _id: state.currentMeditation._id
    });
    console.log(state.currentMeditation)
  };

  return (
    <div>
        {/* <GridContainer justify="center"> */}
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <Button
                    color="transparent"
                    size
                    onClick={() => {
                        setClassicModal(true);
                        dispatch({ type: SET_CURRENT_MEDITATION, meditation: {
                            _id: {_id},
                            img: {img},
                            title: {title},
                            description: {description},
                            video: {video}
                        } })
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
                        {state.favorites.indexOf(state.currentMeditation) !== -1 ? (
                            <FavoriteIcon style={{color: "red"}} 
                                onClick={() => {
                                    removeFavorite();
                                    // removeFromFavorites(meditation._id);
                                }} /> 
                        ) : (
                            <IconButton aria-label="Favorite" onClick={addFavorite}>
                                <img src={FavoriteOutlineGrey} alt="Favorite Icon Grey Outline" color="red" ></img>
                            </IconButton>
                        )}

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
        {/* </GridContainer> */}
    </div>
  );
}