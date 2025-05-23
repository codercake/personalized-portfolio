import React from "react";
import { Bio } from "../../data/constants";  

const ResumeButton = () => {
  return (
    <div>
      <a href={Bio.resume} target="_blank" rel="noopener noreferrer" download>
        <button style={{ /* your styles */ }}>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;