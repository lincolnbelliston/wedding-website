import React from 'react';
import styles from '../../styles/application.scss';

const localStyles = {
  container: {
    "display":"flex",
    "alignItems": "center",
    "flexDirection":"column"
  },
  header: {
    "marginTop":"calc(3% - 20px)",
    "marginBottom":"3%"
  },
  imgContainer: {
    "marginTop": "3%",
    "marginBottom": "3%",
    "width": "100%"
  },
  img: {
    "maxWidth": "100%",
    "width": "100%",
    "display":"block",
    "margin":"auto",
    "padding":"1%",
    "border":"1px solid",
    "borderColor":styles.borderColor
  },
  msgContainer: {
    "width": "100%",
    "display":"block",
    "margin":"auto",
    "marginTop": "3%",
    "marginBottom": "3%"
  },
};

const Registry = () => {
  return(

    <div style={localStyles.container}>
      <div style={localStyles.header}>
        <h1>travel information</h1>
      </div>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/bench2.png")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <p>If you are traveling to see us, THANK YOU!! It truly means alot and we are sure you'll love your stay.</p>
        <p>The easiest airport to fly into is <strong>Phoenix Sky Harbor</strong> but you can also fly into the <strong>Phoenix-Mesa Gateway Airport.</strong></p>
        <br />
        <p>As you make plans, you may want to keep these events in mind:</p>
        <p><strong>Friday 6:00pm</strong> Family Barbeque at <a href="https://goo.gl/maps/ivQQWU3qHyp" target="_blank">Freestone Park</a></p>
        <p><strong>Saturday 8:00am</strong> Kid's Easter Egg Hunt at <a href="https://goo.gl/maps/v7PF9kbCKjE2" target="_blank">Harmony Park</a></p>
        <p><strong>Saturday 2:30pm</strong> Pictures at <a href="https://goo.gl/maps/UpyrBCsvkin" target="_blank">Mesa Temple</a></p>
        <p><strong>Saturday 6:00pm</strong> Reception at <a href="https://goo.gl/maps/VmrUEjm7bZw" target="_blank">Schoenburg Gardens</a></p>
        <p>Parking will be available...</p>
        <br /><br />
        <p><strong>While you're in the area, we recommend checking out:</strong></p>
        <p>The <a href="http://easterpageant.org/" target="_blank">Mesa Temple Easter Pageant</a> will be happening Tuesday-Friday evening.<br /></p>
        <p>Southern food in a 1940's Valentine Diner at <a href="http://welcomediner.net/garfield" target="_blank"> Welcome Diner.</a></p>
      </div>
    </div>

  );


};

export default Registry;
