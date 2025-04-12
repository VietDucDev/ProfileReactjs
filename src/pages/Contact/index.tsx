import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Viet Duc | Portfolio | Contact';
  }, []);
  return (
    <div className="page-content">
      <h1>Contact Me</h1>
      <p>Get in touch with me</p>
    </div>
  );
};

export default Contact; 