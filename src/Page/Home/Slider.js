import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const Slider = () => {
  const data = [
    {
      id: "1",
      desc: "Welcome to the reza travel agent",
      img: "https://i.ibb.co/cxTjkWx/florian-wehde-y3sid-Wv-Dxg-unsplash.jpg",
    },
    {
      id: "2",
      desc: "Travel to top travelling destination.",
      img: "https://i.ibb.co/GPrSpgT/braden-jarvis-Q2gcswj-Lh-S8-unsplash.jpg",
    },
    {
      id: "3",
      desc: "We provide the best service at a very affordable price.",
      img: "https://i.ibb.co/DD1V7nf/jonatan-pie-3l3-Rw-Qd-HRHg-unsplash.jpg",
    },
  ];

  return (
    <div className="App">
      <AwesomeSlider animation="cubeAnimation">
        {data.map((d) => (
          <div
            className="text-white font-bold uppercase text-center"
            key={d.id}
            style={{
              backgroundImage: `url(${d.img})`,
              marginTop: "-70px",
              fontSize: "50px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {d.desc}
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
