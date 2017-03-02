import React from 'react';

const localStyles = {
  img: {
    "maxWidth": "90%",
    "display":"block",
    "margin":"auto",
    "marginTop":"5%",
    "padding":"1%"
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
        <img src={require("../../assets/bench.png")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <br />
        <p>Travel info</p>
      </div>

    </div>

  );


};

export default Registry;
