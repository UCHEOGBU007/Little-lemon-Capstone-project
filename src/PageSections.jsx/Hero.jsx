import React from "react";

const Hero = () => {
  return (
    // Hero main section starts here
    <main
      style={{
        background: "#495E58",
        width: "100%",
        maxHeight: "450px",
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ maxWidth: "500px", margin: "50px 0 0 100px" }}>
        <h2
          style={{
            color: "#F4CE14",
            fontFamily: "Abril Fatface",
            fontSize: "3rem",
          }}
        >
          Little Lemon <br />{" "}
          <span>
            <p
              style={{ color: "#edefee", fontSize: "1rem", fontWeight: "bold" }}
            >
              Chicago
            </p>
          </span>
        </h2>
        <p style={{ marginTop: "60px", color: "#edefee", fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet dolor sit adipiscing elit consectetur
          quisque faucibus aucibus ex sapien vitae,Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Reserve a table button  */}

        <button
          style={{
            color: "#495e57",
            // backgroundColor: "#face14",
            background: "linear-gradient(135deg, #faaa16, #face14)",

            marginTop: "30px",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "bolder",
          }}
        >
          Reserve a table
        </button>
      </div>

      {/* image beside hero section and it's size and height  */}

      <div>
        <img
          src="/Hero.jpg"
          alt="Hero Images"
          style={{
            height: "480px",
            width: "400.08px",
            borderRadius: "15px",
            marginRight: "100px",
          }}
        />
      </div>
    </main>
  );
};

export default Hero;
