import { useState } from "react";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h1>About Me</h1>
      <p>Hi! I'm Christopher B. Suan.</p>
      
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

        {showDetails && (
            <div>
            <p> I'm currently a student at the University of Cabuyao, studying Computer Science. </p>
            <p> Currently learning react</p>
            </div>
        )}
    </div>
  );
}