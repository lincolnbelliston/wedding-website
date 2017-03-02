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

const Faq = () => {
  return(

    <div style={localStyles.container}>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/horseshoe.png")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <h2>frequently asked questions</h2>
        <p><strong>How did you meet?</strong></p>
        <p>We met in March 2015 when Lincoln (going to school in Arizona) was visiting a friend in NYC.
        That friend introduced him to Andrea (living in Brooklyn) and we became friends right away. </p>
        <p>After six months of being pen pals, we started visiting each other as often as we could, and it
          wasn't long before we were dating.</p>
        <p><strong>How did you get engaged?</strong></p>
        <p>We ...</p>
        <p><strong>Where will you live?</strong></p>
        <p>We're going to live in Boston, where Lincoln has just accepted a job.</p>
      </div>

    </div>

  );


};

export default Faq;
