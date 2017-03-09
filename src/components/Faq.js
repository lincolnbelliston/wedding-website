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
    "marginBottom": "3%"
  },
  img: {
    "maxWidth": "100%",
    "display":"block",
    "margin":"auto",
    "padding":"1%",
    "border":"1px solid",
    "borderColor": styles.borderColor
  },
  msgContainer: {
    "width": "100%",
    "display":"block",
    "margin":"auto",
    "marginTop": "3%",
    "marginBottom": "3%"
  },
};


const Faq = () => {
  return(

    <div style={localStyles.container}>
      <div style={localStyles.header}>
        <h1>frequently asked questions</h1>
      </div>
      <div style={localStyles.imgContainer}>
        <img src={require("../../assets/horseshoe2.jpg")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <p><strong>how did you meet?</strong></p>
        <p>We met in March 2015 when Lincoln (going to school in Arizona) was visiting a friend in NYC.
        That friend introduced him to Andrea (living in Brooklyn) and we became friends right away. </p>
        <p>After six months of being pen pals, we started visiting each other as often as we could, and it
          wasn't long before we were dating.</p>
        <p><strong>how did you get engaged?</strong></p>
        <p>We got engaged just after Christmas on the way from Lincoln's parents house in Mesa, AZ to Andrea's parents in
          St. George, UT. We stopped at horseshoe bend, a beautiful section of the Colorado River. It was pretty crowded,
          but we walked around the edge of the cliff until we found a secluded spot.</p>
        <p>The photo above was taken minutes after Lincoln proposed.</p>
        <p><strong>where will you live?</strong></p>
        <p>We're going to live in Boston, where Lincoln has just accepted a job.</p>
      </div>
      <br />
    </div>

  );


};

export default Faq;
