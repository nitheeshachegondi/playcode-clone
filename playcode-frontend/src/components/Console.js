import React, { useState, useEffect } from "react";

const Console = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, args.join(" ")]);
      originalLog(...args);
    };
  }, []);

  return (
    <div
      style={{
        background: "#222",
        color: "white",
        padding: "10px",
        height: "30vh",
        overflowY: "scroll",
      }}
    >
      <h3>Console</h3>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
};

export default Console;
