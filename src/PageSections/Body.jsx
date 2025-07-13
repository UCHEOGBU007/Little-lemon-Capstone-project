import React from "react";
import { Link } from "react-router-dom";
import Order from "../Components/Order-online";

const Body = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "5em",
        }}
      >
        <h2>Specials</h2> <Link to="/Menu">Order Online</Link>
      </div>

      {/* First Menu card  starts here*/}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)" /* Three equal columns */,
          gap: "2rem" /* Space between cards */,
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#f7f7f7",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <figure style={{ margin: "0" }}>
            <div>
              <img
                src="/Pasta.jpg"
                alt="Picture description"
                style={{ maxWidth: "100%", borderRadius: "4px" }}
              />
            </div>
            <figcaption>
              <div>
                <h5>
                  Spagheti <span>$100</span>
                </h5>
              </div>
              <p></p>
              <Link to="/Menu" />
            </figcaption>
          </figure>
        </div>
        {/* Second Menu card  starts here*/}

        <div
          style={{
            backgroundColor: "#f7f7f7",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <figure style={{ margin: "0" }}>
            <div>
              <img
                src="/Salad.jpg"
                alt="Picture description"
                style={{ maxWidth: "100%", borderRadius: "4px" }}
              />
            </div>
            <figcaption>
              <div>
                <h5>
                  Salad <span>$85</span>
                </h5>
              </div>
              <p></p>
              <p></p>
            </figcaption>
          </figure>
        </div>

        {/* Third Menu card  */}
        <div
          style={{
            backgroundColor: "#f7f7f7",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <figure style={{ margin: "0" }}>
            <div>
              <img
                src="/TomatoesStew.jpg"
                alt="Picture description"
                Style={{ maxWidth: "100%", borderRadius: "4px" }}
              />
            </div>
            <figcaption>
              <div>
                <h5>
                  Tomato Sauce <span>$150</span>
                </h5>
              </div>
              <p></p>
              <p></p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Body;
