import React, { useEffect } from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  useEffect(() => {
      document.title = 'Viet Duc | Portfolio | About';
    }, []);
  return (
    <div>about</div>
  );
};

export default About;
