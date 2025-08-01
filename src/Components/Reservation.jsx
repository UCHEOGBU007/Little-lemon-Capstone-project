import React, { useEffect, useState } from "react";
import Style from "../Css/Reservation.module.css";
import Testimonies from "../PageSections/Testimonies.jsx";

const Reservation = () => {
  // state declaration

  const [reservation, setReservation] = useState({
    name: "",
    date: "",
    guests: "",
    occasion: "",
    seating: "",
    email: "",
    phone: "",
  });

  /*  post data using asyn api fetch function */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });
      if (!response.ok) {
        console.error("Response status:", response.status);
        throw new Error("Failed to submit reservation.");
      }

      const data = await response.json();
      console.log("Data was successfully submitted", reservation);
      alert("Sucessful Reservation");

      // Reset form after success

      setReservation({
        name: "",
        date: "",
        guests: "",
        occasion: "",
        seating: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  /* Form component */

  return (
    <>
      <section className={Style.container}>
        <div className={Style.header}>
          <img src="/restaurant.jpg" alt="" />
        </div>

        <h4>BOOK A RESERVATION </h4>

        {/* Form starts here */}

        <form
          onSubmit={handleSubmit}
          role="form"
          aria-labelledby="form-title"
          aria-describedby="form-desc"
        >
          <fieldset aria-labelledby="reservation-details-legend">
            <legend id="reservation-details-legend">Reservation Details</legend>

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              value={reservation.name}
              onChange={(e) =>
                setReservation({ ...reservation, name: e.target.value })
              }
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date"
              required
              value={reservation.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) =>
                setReservation({ ...reservation, date: e.target.value })
              }
            />

            <label htmlFor="guests">Number of Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              placeholder="Choose Number of guest"
              required
              value={reservation.guests}
              onChange={(e) =>
                setReservation({ ...reservation, guests: e.target.value })
              }
            />

            <label htmlFor="Event">Occasion:</label>
            <select
              name="Events"
              id="Events"
              value={reservation.occasion}
              onChange={(e) =>
                setReservation({ ...reservation, occasion: e.target.value })
              }
            >
              <option value="" disabled>
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
              <input
                type="radio"
                id="indoor"
                name="seating"
                value="indoor"
                checked={reservation.seating === "indoor"}
                onChange={(e) =>
                  setReservation({ ...reservation, seating: e.target.value })
                }
              />

              <label htmlFor="seating">outdoor:</label>
              <input
                type="radio"
                id="outdoor"
                name="seating"
                value="outdoor"
                checked={reservation.seating === "outdoor"}
                onChange={(e) =>
                  setReservation({ ...reservation, seating: e.target.value })
                }
              />
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
              value={reservation.email}
              onChange={(e) =>
                setReservation({ ...reservation, email: e.target.value })
              }
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
              value={reservation.phone}
              onChange={(e) =>
                setReservation({ ...reservation, phone: e.target.value })
              }
            />
          </fieldset>

          <button type="submit">Reserve Now</button>
        </form>

        {/* Form ends here */}
      </section>
      <Testimonies />
    </>
  );
};

export default Reservation;
