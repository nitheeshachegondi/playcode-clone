import React, { useState } from "react";
import SplitPane from "react-split-pane";
import Editor from "./components/Editor";
import Preview from "./components/preview";
import Console from "./components/Console";
import FileManager from "./components/FileManager";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const App = () => {
  const [files, setFiles] = useState({
    "index.html": "<h1>Hello World</h1>",
    "styles.css": "body { font-family: Arial; background: #f5f5f5; }",
    "script.js": "console.log('Hello from JavaScript');",
  });

  const [theme, setTheme] = useState("vs-dark");

  return (
    <div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <FileManager files={files} setFiles={setFiles} />
      <SplitPane split="vertical" minSize={400} defaultSize="50%">
        <Editor files={files} setFiles={setFiles} theme={theme} />
        <SplitPane split="horizontal" minSize={200} defaultSize="70%">
          <Preview files={files} />
          <Console />
        </SplitPane>
      </SplitPane>
    </div>
  );
};

export default App;
