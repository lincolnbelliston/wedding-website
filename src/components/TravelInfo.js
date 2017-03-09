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
