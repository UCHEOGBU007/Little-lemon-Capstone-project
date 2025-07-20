import React from "react";
import Style from "../Css/Reservation.module.css";

const Reservation = () => {
  return (
    <>
      <section className={Style.container}>
        <div className={Style.header}>
          <h4>MAKE A RESERVATION</h4>
        </div>
        <form>
          <fieldset>
            <legend>Reservation Details</legend>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required />
            <label htmlFor="Event">Number of Guests:</label>

            <select name="Events" id="Events">
              <option value="Occasion">Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>

              <option value="Meeting">Meeting</option>
              <option value="Hangouts">Hangouts</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Contact Info</legend>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </fieldset>

          <button type="submit">Reserve Now</button>
        </form>
      </section>
    </>
  );
};

export default Reservation;
