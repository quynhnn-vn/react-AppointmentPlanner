import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  // Render a form with 3 input elements, a ContactPicker and a submit button
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="date"
        value={date}
        min={getTodayString()}
        max="2050-12-31"
        required
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="time"
        value={time}
        required
        onChange={(event) => setTime(event.target.value)}
      />
      <ContactPicker contacts={contacts} onChange={(event) => setContact(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
