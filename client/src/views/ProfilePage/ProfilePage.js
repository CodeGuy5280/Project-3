import React from "react";
// import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import { Loading } from "../components";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/profilepic.webp";

import studio1 from "assets/img/examples/buddha.jpg";
import studio4 from "assets/img/examples/waterdrop.jpg";
import power from "assets/img/examples/powerofmantrameditation.jpg";
import chakra from "assets/img/examples/chakra+black.jpg";
import mantra from "assets/img/examples/mantra-meditation.jpg"
import zen from "assets/img/examples/zenmeditation.gif";
import Sawaki from "assets/img/examples/Kodo_Sawaki_Zazen.jpg";
import work3 from "assets/img/examples/yoga2.jpg";
import work4 from "assets/img/examples/yogarocks.jpg";
import work5 from "assets/img/examples/yoga1.jpg";
import work6 from "assets/img/examples/yoga3.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  // const Profile = () => {
  //   const { user } = useAuth0();
  //   const { name, picture, email } = user;
  //   return (
  //     <div>
  //       <div className="row align-items-center profile-header">
  //         <div className="col-md-2 mb-3">
  //           <img
  //             src={picture}
  //             alt="Profile"
  //             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
  //           />
  //         </div>
  //         <div className="col-md text-center text-md-left">
  //           <h2>{name}</h2>
  //           <p className="lead text-muted">{email}</p>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <pre className="col-12 text-light bg-dark p-4">
  //           {JSON.stringify(user, null, 2)}
  //         </pre>
  //       </div>
  //     </div>
  //   );
  // };
  // export default withAuthenticationRequired(Profile, {
  //   onRedirecting: () => <Loading />,
  // });

  var name = "Smashinator"
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
      <Parallax small filter image={require("assets/img/meditate.jpg")} />
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
                    <h3 className={classes.title}>{name}</h3>
                    <h6><u>10 Mantras to help with Daily Gratitude</u></h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
               {/* <ul>10 Mantras to help with Daily Gratitude: </ul>
               <br/>  */}
               <ul>1. Every experience I have is perfect for my growth.</ul>
               <ul>2. Nowhere to be, nothing to do, nothing to fix.</ul>
               <ul>3. I have everything I need.</ul>
               <ul>4. I appreciate the abundance in my life and I allow myself to expand in gratitude, success and joy everyday.</ul>
               <ul>5. Dhanya Vad- sanskrit phrase meaning “I am grateful”</ul>
               <ul>6. Thank your food, and thank it well.</ul>
               <ul>7. Gratitude brings me into a harmonious relationship with the good in everyone and everything that surrounds me.</ul>
               <ul>8. Life is a dream. Everything I am looking for is already on its way.</ul>
               <ul>9. In this very moment I am grateful for…</ul>
               <ul>10. I clearly see all there is to be grateful for in life. I acknowledge the blessings I have received in my life with gratitude.</ul>
               {" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Mantra",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <link>
                            </link>
                <h6><u>What is Mantra Meditation?</u></h6>
                <p>
                A mantra is a syllable, word, or phrase that is repeated during meditation. Mantras can be spoken, chanted, whispered, or repeated in the mind. Most mantra meditation techniques have two essential components: mindfulness meditation and mantra recitation or chanting. While this age-old practice is known to have Buddhist and Hindu roots, forms of “sacred word” recitation exist within a great variety of spiritual traditions, including Judeo-Christian and Shamanic. Nowadays, mantra practice is also gaining popularity as part of secular mindfulness practice.</p>

              <h6><u>How to do Mantra Meditation</u></h6>

              <ul>1. Find the best mantras to suit your intention</ul>
              <ul>2. Get comfortable and remember your intention</ul>
              <ul>3. Next, sit correctly and focus on your breathing</ul>
              <ul>4. Chant your mantra</ul>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={chakra}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={power}
                              className={navImageClasses}
                            />
                                                        <img
                              alt="..."
                              src={mantra}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Yoga",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          <h6><u>What is Yoga Meditation?</u></h6>
                          <p>Meditation is a process, resulting from a successful turning inwards of the mind and a conviction that there is a truth higher and more satisfying than what the mind and our intelligence can come up with. Usually people have to come to a dead-end in their search for happiness and solutions in the mental and sensual realm to start meditation seriously.</p>

                <h6><u>How to do Yoga Meditation</u></h6>

                <p>Part 1: Creating a Meditative Environment</p>
                <ul>1. Select a quiet environment.</ul>
               <ul>2. Choose a spot with natural heat, cooling, and fresh air. </ul>
               <ul>3. Time your meditation sessions around meals.</ul>
               <ul>4. Do some light stretching or exercising.</ul>
               <p>Part 2: Performing Poses Suited to Meditation</p>
               <ul>5. Sit upright.</ul>
               <ul>6. Practice deep breathing techniques.</ul>
               <ul>7. Practice the Samasthiti.</ul>
               <ul>8. Try the cow pose.</ul>
               <ul>9. Perform the vajrasana.</ul>
               <ul>10. Try Ujjayi breathing.</ul>
               <p>Part 3: Focusing On the Body, Mind, and Beyond</p>
               <ul>11. Dissolve away distractions.</ul>
               <ul>12. Reflect on your body.</ul>
               <ul>13. Discipline your mind to focus.</ul>
               <ul>14. Concentrate on a singular object.</ul>
               <ul>15. Open your eyes slowly.</ul>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                    <img
                              alt="..."
                              src={work6}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Zen",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                  <h6><u>What is Zen Meditation?</u></h6>

                  <p>Zen meditation is an ancient Buddhist tradition that dates back to the Tang Dynasty in 7th century China. From its Chinese origins it spread to Korea, Japan and other Asian lands where it continues to thrive. The Japanese term “Zen” is a derivative of the Chinese word Ch’an, itself a translation of the Indian term dhyana, which means concentration or meditation. Zen meditation is a traditional Buddhist discipline which can be practiced by new and seasoned meditators alike. One of the many benefits of Zen meditation is that it provides insight into how the mind works. As with other forms of Buddhist meditation, Zen practice can benefit people in myriad ways, including providing tools to help cope with depression and anxiety issues. The deepest purpose is spiritual, as the practice of Zen meditation uncovers the innate clarity and workability of the mind. In Zen, experiencing this original nature of mind is experiencing awakening.</p>

                <h6><u>How to do Zen Meditation</u></h6>

              <p>Part 1 Getting in the Right Position</p>
                <ul>1. Create a relaxing place to sit.</ul>
               <ul>2. Get into a stable position.</ul>
               <ul>3. Position your head in a comfortable fashion.</ul>
               <ul>4. Relax your jaw and facial muscles.</ul>
               <p>Part 2: Practicing the basics</p>
               <ul>5. Breathe through your nose.</ul>
               <ul>6. Focus on the breath.</ul>
               <ul>7. Decide what to do with your eyes.</ul>
               <ul>8. Redirect your mind when it wanders. </ul>
               <ul>9. Start off with two minutes of meditation.</ul>
               <p>Part 3: Easing into a Routine</p>
               <ul>10. Invest in a zafu or small pillow</ul>
               <ul>11. Do not worry about perfection right away.</ul>
               <ul>12. Increase your sessions with time. </ul>
               <ul>13. Take classes.</ul>

                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Sawaki}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={zen}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                              <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
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





