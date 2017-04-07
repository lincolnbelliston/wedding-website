import React from 'react';
import styles from '../../styles/application.scss';
import {Link} from 'react-router-dom';

const localStyles = {
  img: {
    "maxWidth": "100%",
    "display":"block",
    "margin":"auto",
    "padding":"1%",
    "border":"1px solid",
    "borderColor":styles.borderColor
  },
  header: {
    "marginTop":"calc(3% - 20px)",
    "marginBottom":"3%"
  },
  imgContainer: {
    "marginTop":"3%",
    "marginBottom":"3%"
  },

  msgContainer: {
    "width": "100%",
    "display":"block",
    "margin":"auto",
    "marginTop":"3%",
    "marginBottom":"3%",
    "textAlign":"center"
  },
  container: {
    "display":"flex",
    "alignItems": "center",
    "flexDirection":"column",
  }
};

const Home = () => {
  return(

    <div style={localStyles.container}>
      <div style={localStyles.header}>
        <h1>andrea + lincoln</h1>
      </div>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/Andrea-Lincoln-1-min.jpg")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <h1>welcome!</h1>
        <p>we're excited to celebrate our wedding with you</p>
        <br />
      </div>
      <div style={{display:'none'}}>
        <Link to="/" id="updateHeader">h</Link>
      </div>
    </div>

  );

};

export default Home;
