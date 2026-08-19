import { useState } from "react";

export default function Home() {

    const [showIntro, setShowIntro] = useState(false);

    return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi! I'm Christopher B. Suan</p>

      <button onClick={() => setShowIntro(!showIntro)}>
        {showIntro ? "Hide Introduction" : "Show Introduction"}
      </button>

      {showIntro && (
        <p>
          I am interested in web development and creating applications
          using React.
        </p>
      )}
    </div>
  );
}