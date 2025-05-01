import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
