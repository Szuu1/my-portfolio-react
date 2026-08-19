import { useState } from "react";

export default function Interests() {
  const [selectedInterest, setSelectedInterest] = useState("");

  return (
    <div>
      <h1>My Interests</h1>

      <button onClick={() => setSelectedInterest("Programming")}>Programming</button>
      <button onClick={() => setSelectedInterest("Gaming")}>Gaming</button>
      <button onClick={() => setSelectedInterest("Music")}>Music</button>

      {selectedInterest && (
        <div>
          <h2>{selectedInterest}</h2>
          <p>Here are some details about my interest in {selectedInterest}.</p>
        </div>
      )}
    </div>
  );
}
