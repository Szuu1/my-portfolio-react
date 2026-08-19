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
          I am a Christopher B. Suan, a 3rd-year Computer Science student at Pamantasan ng Cabuyao. I have a strong passion for technology and programming, and I am constantly seeking opportunities to learn and grow in this field. My goal is to become a skilled software developer and contribute to innovative projects that make a positive impact on society.
        </p>
      )}
    </div>
  );
}