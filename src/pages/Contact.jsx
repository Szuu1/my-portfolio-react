import {useState} from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Contact Me</h1>
      
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <br> </br>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
