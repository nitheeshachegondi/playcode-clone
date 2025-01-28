import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ files, setFiles, theme }) => {
  const [activeFile, setActiveFile] = React.useState("index.html");

  return (
    <div>
      <select onChange={(e) => setActiveFile(e.target.value)}>
        {Object.keys(files).map((file) => (
          <option key={file} value={file}>
            {file}
          </option>
        ))}
      </select>

      <MonacoEditor
        height="100vh"
        language={
          activeFile.endsWith(".js")
            ? "javascript"
            : activeFile.endsWith(".css")
            ? "css"
            : "html"
        }
        theme={theme}
        value={files[activeFile]}
        onChange={(value) => setFiles({ ...files, [activeFile]: value })}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default Editor;
