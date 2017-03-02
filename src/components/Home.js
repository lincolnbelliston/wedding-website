import React from 'react';
import styles from '../../styles/application.scss';

const localStyles = {
  img: {
    "maxWidth": "90%",
    "display":"block",
    "margin":"auto",
    "marginTop":"5%",
    "padding":"1%",
    "border":"1px solid",
    "borderColor":styles.borderColor
  },
  header: {
    "marginTop":"5%"
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

const Home = () => {
  return(

    <div style={localStyles.container}>
      <div style={localStyles.header}>
        <h1>Andrea + Lincoln</h1>
      </div>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/Andrea-Lincoln-1.jpg")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <h2>Welcome!</h2>
        <p>Here is some text</p>
      </div>

    </div>

  );


};

export default Home;
