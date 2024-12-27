import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spring from "../components/spring";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <BackButton destination="/" />
      <h1 style={{ textAlign: "center", color: "#333" }}>Book Details</h1>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Spring />
        </div>
      ) : (
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <strong>ID:</strong> <span>{book._id || "N/A"}</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <strong>Title:</strong> <span>{book.title || "N/A"}</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <strong>Author:</strong> <span>{book.author || "N/A"}</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <strong>Publish Year:</strong>{" "}
            <span>{book.publishYear || "N/A"}</span>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <strong>Created At:</strong>{" "}
            <span>
              {book.createAt ? new Date(book.createAt).toLocaleString() : "N/A"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
