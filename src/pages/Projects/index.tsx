import React, { useEffect } from 'react';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Viet Duc | Portfolio | Projects';
  }, []);
  return (
    <div className="page-content">
      <h1>My Projects</h1>
      <p>Here are my recent projects</p>
    </div>
  );
};

export default Projects; 