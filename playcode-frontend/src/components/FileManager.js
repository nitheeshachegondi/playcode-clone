import React from "react";

const FileManager = ({ files, setFiles }) => {
  const addFile = () => {
    const fileName = prompt("Enter new file name (e.g., style.css, script.js)");
    if (fileName) setFiles({ ...files, [fileName]: "" });
  };

  return (
    <div style={{ padding: "10px", background: "#444", color: "white" }}>
      <h3>Files</h3>
      <ul>
        {Object.keys(files).map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <button onClick={addFile}>+ Add File</button>
    </div>
  );
};

export default FileManager;
