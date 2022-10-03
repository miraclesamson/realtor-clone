import React from "react";
import { getAuth } from "firebase/auth";

export default function Greeting({ name }) {
  const auth = getAuth();

  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    fontSize: 35,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#D90000";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#04733F";
  } else {
    timeOfDay = "night";
    styles.color = "#04756F";
  }

  return (
    <h1 style={styles}>
      {" "}
      Good {timeOfDay} {name}!
    </h1>
  );
}
