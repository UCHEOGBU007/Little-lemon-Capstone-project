import React from "react";
import Style from "../Css/Reservation.module.css";
import Testimonies from "../PageSections/Testimonies.jsx";

const Reservation = () => {
  const Form = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className={Style.container}>
        <div className={Style.header}>
          <h4>BOOK A RESERVATION</h4>
        </div>
        <form onSubmit={Form}>
          <fieldset>
            <legend>Reservation Details</legend>

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              required
            />

            <label htmlFor="guests">Number of Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              placeholder="Choose Number of guest"
              required
            />

            <label htmlFor="Event">Occasion:</label>
            <select name="Events" id="Events">
              <option value="" disabled selected>
                {" "}
                -- Choose Occasion --{" "}
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Meeting">Meeting</option>
              <option value="Hangouts">Hangouts</option>
            </select>
            <br />
            <div className={Style.radiobox}>
              <label htmlFor="seating">Indoor:</label>
              <input type="radio" name="seating" value="indoor" required />

              <label htmlFor="seating">outdoor:</label>
              <input type="radio" name="seating" value="outdoor" required />
            </div>
          </fieldset>

          <fieldset>
            <legend>Contact Info</legend>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </fieldset>

          <button type="submit">Reserve Now</button>
        </form>
      </section>
      <Testimonies />
    </>
  );
};

export default Reservation;
