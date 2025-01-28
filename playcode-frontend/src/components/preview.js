import React, { useEffect, useRef } from "react";

const Preview = ({ files }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const htmlContent = `
      <html>
        <head>
          <style>${files["styles.css"]}</style>
        </head>
        <body>
          ${files["index.html"]}
          <script>
            try {
              ${files["script.js"]}
            } catch (error) {
              document.body.innerHTML += "<pre style='color: red;'>" + error + "</pre>";
            }
          </script>
        </body>
      </html>
    `;
    iframeRef.current.srcdoc = htmlContent;
  }, [files]);

  return (
    <iframe
      ref={iframeRef}
      title="preview"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default Preview;
