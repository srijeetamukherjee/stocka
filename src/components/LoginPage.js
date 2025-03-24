import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundColor: "#1E1E1E",
      }}
    >
      {/* Left Side - Login Form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#1E1E1E",
          color: "#12C6C6",
          padding: "5vw",
          paddingTop: "10vh",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4vw",
            marginBottom: "30px",
            fontStyle: "italic",
            fontWeight: "500",
            whiteSpace: "nowrap",
          }}
        >
          Login to Your Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            display: "block",
            padding: "15px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "50px",
            margin: "10px auto",
            backgroundColor: "#045757",
            color: "white",
            fontSize: "1.2rem",
            border: "none",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            display: "block",
            padding: "15px",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "50px",
            margin: "10px auto",
            backgroundColor: "#045757",
            color: "white",
            fontSize: "1.2rem",
            border: "none",
          }}
        />

        <button
          onClick={() => navigate("/stock-data")}
          style={{
            width: "50%",
            maxWidth: "250px",
            padding: "15px",
            backgroundColor: "#E4E4E4",
            color: "#222222",
            border: "none",
            borderRadius: "50px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          Login
        </button>
      </div>

      {/* Right Side - Signup Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          padding: "10vw",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center everything
        }}
      >
        <h1 style={{ color: "#044343", fontSize: "3vw", marginBottom: "10px" }}>
          New Here?
        </h1>
        <p style={{ color: "#045757", fontSize: "1.5vw", marginBottom: "20px", maxWidth: "400px" }}>
          Sign up and discover a great amount of new opportunities!
        </p>
        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "50%",
            maxWidth: "250px",
            padding: "15px",
            backgroundColor: "#222222",
            color: "#E4E4E4",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1.2rem",
            marginTop: "20px", // Adjust spacing
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
