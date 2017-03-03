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
        <img src={require("../../assets/bench2.png")} style={localStyles.img}/>
      </div>
      <div style={localStyles.msgContainer}>
        <h1>travel information</h1>
        <p><strong>airport:</strong></p>
        <p> Phoenix Sky Harbor</p>
        <br />
        <p><strong>venue:</strong></p>
        <p>Schoenburg Gardens<br />
        4210 E Houston Ave<br />
        Gilbert, AZ 85234</p>
        <p>Parking will be available...</p>
        <p>(map coming soon)</p>
        <br />
        <p><strong>attractions:</strong></p>
        <p>Mesa Temple Easter Pageant<br /></p>
      </div>

    </div>

  );


};

export default Registry;
