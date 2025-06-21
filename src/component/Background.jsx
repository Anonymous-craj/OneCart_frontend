import React from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

function Background({ heroCount }) {
  if (heroCount === 0) {
    return (
      <img
        src={slider2}
        alt=""
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
      />
    );
  } else if (heroCount === 1) {
    return (
      <img
        src={slider1}
        alt=""
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
      />
    );
  } else if (heroCount === 2) {
    return (
      <img
        src={slider3}
        alt=""
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
      />
    );
  } else if (heroCount === 3) {
    return (
      <img
        src={slider4}
        alt=""
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
      />
    );
  }
}

export default Background;
