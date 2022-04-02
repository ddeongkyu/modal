import React from "react";

function IslandInformation({ Days }) {
  if (Days === 1) {
    return console.log(Days) + 1;
  } else {
    return <p></p>;
  }
}

export default IslandInformation;
