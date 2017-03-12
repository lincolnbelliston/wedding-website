import React from 'react';

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
<p>if you are traveling to see us, THANK YOU!! It truly means alot and we are sure you'll love your stay.</p>
        <p>The easiest airport to fly into is <strong>Phoenix Sky Harbor</strong></p> but you can also fly into the <strong>Phoenix-Mesa Gateway Airport.</strong>
        <br />
        <p><strong>venue:</strong></p>
        <p>Schoenburg Gardens<br />
        4210 E Houston Ave<br />
        Gilbert, AZ 85234</p>
        <p>Parking will be available...</p>
        <p>(map coming soon)</p>
        <br />
        <p><strong>While you're in the area, we recommend checking out:</strong></p>
        <p>The<a href="http://easterpageant.org/" target="_blank">Mesa Temple Easter Pageant</a> will be happening Tuesday-Friday evening.<br /></p>
        <p>Southern food in a 1940's Valentine Diner at<a href="http://welcomediner.net/garfield" target="_blank">Welcome Diner.</a></p>
      </div>

    </div>

  );


};

export default Registry;
