import React from "react";

export default function Loading() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid rgba(0, 0, 0, 0.1)",
    borderTop: "5px solid #000",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
