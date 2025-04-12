import React, { useEffect } from "react";
import styles from "./Resume.module.css";


const Resume: React.FC = () => {
  useEffect(() => {
      document.title = 'Viet Duc | Portfolio | Resume';
    }, []);
  return (
    <div>resume</div>
  );
};

export default Resume;
