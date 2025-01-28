import React from "react";
import Split from "react-split-pane";
import FileManager from "./FileManager";
import CodeEditor from "./Editor"; // Ensure CodeEditor is imported correctly
import Console from "./Console";
import Preview from "./preview";
import "../App.css";

const Layout = () => {
  return (
    <div className="layout">
      <Split
        className="split-horizontal"
        sizes={[20, 80]}
        direction="horizontal"
      >
        {/* Left Sidebar */}
        <FileManager />

        {/* Code Editor with Bottom Console & Preview */}
        <Split className="split-vertical" sizes={[70, 30]} direction="vertical">
          <CodeEditor /> {/* Make sure this component is correctly imported */}
          <Split
            className="split-horizontal"
            sizes={[50, 50]}
            direction="horizontal"
          >
            <Console />
            <Preview />
          </Split>
        </Split>
      </Split>
    </div>
  );
};

export default Layout;
