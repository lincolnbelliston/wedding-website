import React from 'react';

const localStyles = {
  img: {
    "maxWidth": "100%",
    "display":"block",
    "margin":"auto",
    "padding":"1%"
  },
  header: {
    "marginTop":"calc(3% - 20px)",
    "marginBottom":"3%"
  },
  imgContainer: {
    "marginTop": "3%",
    "marginBottom":"3%"
  },

  msgContainer: {
    "width": "100%",
    "display":"block",
    "margin":"auto",
    "marginBottom": "3%",
    "marginTop": "3%"
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
      <div style={localStyles.header}>
        <h1>registry</h1>
      </div>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/polaroid2.png")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <p>We'll be flying back to Boston after the wedding, so it will be difficult for us to
        take gifts home. If you'd like to get us a gift, we are registered at Zola.com. Zola allows
        you to purchase a gift that will be shipped to us once we're settled into our new place.</p>
      <p>View our registry <a href="https://www.zola.com/registry/andrea-lincoln" target="_blank">here</a>.</p>
      </div>
      <br />
    </div>

  );


};

export default Registry;
