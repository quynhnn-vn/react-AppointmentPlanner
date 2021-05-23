import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  // Render a form with 3 controlled input elements and a submit button
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="tel"
        placeholder="French Phone Number"
        value={phone}
        pattern="^((\+)33|0)[1-9](\d{2}){4}$"
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
