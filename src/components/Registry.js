import React from 'react';
import styles from '../../styles/application.scss';

const localStyles = {
  img: {
    "maxWidth": "90%",
    "display":"block",
    "margin":"auto",
    "marginTop":"5%",
    "padding":"1%",
    "borderColor":styles.borderColor
  },
  imgContainer: {
    "maxWidth": "90%"
  },

  msgContainer: {
    "width": "80%",
    "display":"block",
    "margin":"auto"
  },
  container: {
    "display":"flex",
    "alignItems": "center",
    "flexDirection":"column"
  }
};

const Registry = () => {
  return(

    <div style={localStyles.container}>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/polaroid2.png")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <br />
        <p>We'll be flying back to Boston after the wedding, so it will be difficult for us to
        take gifts home. If you'd like to get us a gift, we are registered at Zola.com. Zola allows
        you to purchase a gift that will be shipped to us once we're settled into our new place.</p>
      <p>View our registry <a href="https://www.youtube.com/watch?v=hFDcoX7s6rE" target="_blank">here</a>.</p>
      </div>

    </div>

  );


};

export default Registry;
