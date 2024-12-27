import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link
        to={destination}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007BFF",
          borderRadius: "5px",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        ← Back
      </Link>
    </div>
  );
};

export default BackButton;
