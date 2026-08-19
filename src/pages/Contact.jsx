import {useState} from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedEmail(email);
  };

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedName && (
        <div>
          <h2>Submitted Information:</h2>

          <p>Name: {submittedName}</p>
          <p>Email: {submittedEmail}</p>
        </div>
      )}
    </div>
  );
}