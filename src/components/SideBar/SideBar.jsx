import React, { useState } from "react";
import "./SideBar.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import robo1 from "./robo1.png";
import robo2 from "./robo2.png";
import robo3 from "./robo3.png";
import robo4 from "./robo4.png";

const SideBar = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  const images = [
    {
      id: 1,
      src: img1,
      robo: robo1,
      title: "RoboWar",
      description:
        "The CAM Warrior event features the demonstration of its advanced drone technology, showcasing autonomous flight, obstacle avoidance, and precision cinematic capture, all while adhering to specific time constraints. This event provides an opportunity to observe the future of aerial cinematography and technological innovation in action. RoboWar, on the other hand, offers a captivating spectacle of robotic combatants clashing within a futuristic arena. The event is a testament to the pinnacle of robotics and engineering achievement, delivering a thrilling exhibition of technology.",
    },
    {
      id: 2,
      src: img2,
      robo: robo2,
      title: "RESQLIMPIC",
      description:
        "Advanced drone technology, showcasing autonomous flight, obstacle avoidance, and precision cinematic capture, all while adhering to specific time constraints. This event provides an opportunity to observe the future of aerial cinematography and technological innovation in action. RoboWar, on the other hand, offers a captivating spectacle of robotic combatants clashing within a futuristic arena. The event is a testament to the pinnacle of robotics and engineering achievement, delivering a thrilling exhibition of technology.",
    },
    {
      id: 3,
      src: img3,
      robo: robo3,
      title: "CAMWARRIOR",
      description:
        "Advanced drone technology, showcasing autonomous flight, obstacle avoidance, and precision cinematic capture, all while adhering to specific time constraints. This event provides an opportunity to observe the future of aerial cinematography and technological innovation in action. RoboWar, on the other hand, offers a captivating spectacle of robotic combatants clashing within a futuristic arena. The event is a testament to the pinnacle of robotics and engineering achievement, delivering a thrilling exhibition of technology.",
    },
    {
      id: 4,
      src: img4,
      robo: robo1,
      title: "TACTICAL TRACKER TOURNAMENT",
      description:
        "Sometimes and some Advanced drone technology, showcasing autonomous flight, obstacle avoidance, and precision cinematic capture, all while adhering to specific time constraints. This event provides an opportunity to observe the future of aerial cinematography and technological innovation in action. RoboWar, on the other hand, offers a captivating spectacle of robotic combatants clashing within a futuristic arena. The event is a testament to the pinnacle of robotics and engineering achievement, delivering a thrilling exhibition of technology.",
    },
  ];

  return (
    <div className="main">
      <div>
        {images.map((item) => (
          <div
            key={item.id}
            className={`box box${item.id} ${
              item.id === selectedImage ? "selected" : "normal"
            }`}
            onClick={() => setSelectedImage(item.id)}
          >
            <img className={`img ${item.id === selectedImage ? "selected-image img" : "unselected-image img"}`}  src={item.src} alt={item.title} />
          </div>
        ))}
      </div>
      <div>
        {images.map((item) => (
          <div
            key={item.id}
            className={`box box${item.id} ${
              item.id === selectedImage ? "selected" : "normal"
            }`}
            onClick={() => setSelectedImage(item.id)}
          >
            {item.id === selectedImage && (
              <div>
                <div className="text">
                  <div className="text-wrapper">
                    {item.title}
                  </div>
                  <div className="line" />
                </div>
                <div className="the-CAM-warrior">
                  {item.description}
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
        <div>
          {images.map((item) => (
            <div key={item.id}>
              {item.id === selectedImage && (
                <img className="robo" src={item.robo} alt={`${item.title} Robo`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SideBar;
