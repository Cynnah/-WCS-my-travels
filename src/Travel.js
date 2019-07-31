import React from "react";

const Travel = (props) => (
  <figure>
    <img
      src={props.image}
      alt={props.destination}
    />
    <figcaption>
    <br />
      <destination>{props.destination}</destination>
      <br />
      <country>{props.country}</country>
      <br />
      <distance>{props.distance}</distance>
    </figcaption>
  </figure>
);

export default Travel;