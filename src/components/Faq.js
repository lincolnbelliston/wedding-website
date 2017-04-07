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
        <p>We met in March 2015 when Lincoln (going to school in Arizona) was visiting his friend Victoria in NYC.
        Victoria introduced him to her best friend, Andrea (living in Brooklyn) and we became friends right away. At the end of the trip, we acknowledged that we might never see each other again, but agreed to become pen pals.</p>
      <p>After six months of writing letters, we started flying across the country to visit each other, and it
          wasn't long before we were dating.</p>

        <p> Here's a diagram: 🙋🏻‍♂️ 🙋🏻 👉  💌 👉  ✈️ 👉  💑 👉 💍</p>
        <br />
        <p><strong>how did you get engaged?</strong></p>
        <p>We got engaged just after Christmas on the way from Lincoln's parents house in Mesa, AZ to Andrea's parents in
          St. George, UT. We stopped at Horseshoe Bend, a beautiful section of the Colorado River. It was pretty crowded-- nevertheless, he persisted. Lincoln insisted on walking around the edge of the cliff until we found a secluded spot where he could get down on one knee.</p>

        <p>The photo above was taken minutes after Lincoln proposed. Please notice the majestic view.</p>
        <p><strong>where will you live?</strong></p>
        <p>We're moving to Boston! Lincoln's short stint in NYC has come to an end, as he has just accepted a job and will be moving right before the wedding. Andrea is leaving her position on the Anthropologie visual team and hopes to become a professional knitter.</p>
      </div>
      <br />
      
    </div>

  );


};

export default Faq;
