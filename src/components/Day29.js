import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const Day29 = () => {
  const sketchCanvasRef = useRef();
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [strokeColor, setStrokeColor] = useState("black");
  const [canvasColor, setCanvasColor] = useState("white");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [exportWithBackgroundImage, setExportWithBackgroundImage] =
    useState(false);
  const [
    preserveBackgroundImageAspectRatio,
    setPreserveBackgroundImageAspectRatio,
  ] = useState("none");
  const [eraserWidth, setEraserWidth] = useState(8);
  const [isEraserMode, setIsEraserMode] = useState(false); // Track eraser mode state

  const handleClearCanvas = () => {
    sketchCanvasRef.current.clearCanvas();
  };

  const handleResetCanvas = () => {
    sketchCanvasRef.current.resetCanvas();
  };

  const handleUndo = () => {
    sketchCanvasRef.current.undo();
  };

  const handleRedo = () => {
    sketchCanvasRef.current.redo();
  };

  const handleToggleEraserMode = () => {
    // Toggle eraser mode
    setIsEraserMode(!isEraserMode);

    // Use the setIsEraserMode state to switch between pen and eraser mode
    sketchCanvasRef.current.eraseMode(isEraserMode);
  };

  const handleExportImage = () => {
    sketchCanvasRef.current.exportImage("image/png").then((dataUrl) => {
      // Create a hidden anchor element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "sketch.png";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const handleExportSvg = () => {
    sketchCanvasRef.current.exportSvg().then((svgElement) => {
      // Create a hidden anchor element to trigger the download
      const svgData = new Blob([svgElement.outerHTML], {
        type: "image/svg+xml",
      });
      const svgUrl = URL.createObjectURL(svgData);

      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = "sketch.svg";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Clean up the URL object
      URL.revokeObjectURL(svgUrl);
    });
  };

  return (
    <div className="container">
      <div className="w-100">
        <div className="d-flex flex-wrap">
          <div className="form-group">
            <label htmlFor="strokeWidth">Stroke Width:</label>
            <input
              type="number"
              id="strokeWidth"
              className="form-control"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
            />
          </div>
          <div className="form-group mx-3">
            <label htmlFor="strokeColor">Stroke Color:</label>
            <input
              type="color"
              id="strokeColor"
              className="form-control"
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
            />
          </div>
          <div className="form-group mx-3">
            <label htmlFor="canvasColor">Canvas Color:</label>
            <input
              type="color"
              id="canvasColor"
              className="form-control"
              value={canvasColor}
              onChange={(e) => setCanvasColor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="eraserWidth">Eraser Width:</label>
            <input
              type="number"
              id="eraserWidth"
              className="form-control"
              value={eraserWidth}
              onChange={(e) => setEraserWidth(parseInt(e.target.value))}
            />
          </div>
          <div className="form-check mx-3">
            <input
              type="checkbox"
              id="exportWithBackgroundImage"
              className="form-check-input"
              checked={exportWithBackgroundImage}
              onChange={(e) => setExportWithBackgroundImage(e.target.checked)}
            />
            <label
              className="form-check-label"
              htmlFor="exportWithBackgroundImage"
            >
              Export with Background Image
            </label>
          </div>
          <div className="form-group my-2">
            <label htmlFor="preserveBackgroundImageAspectRatio">
              Preserve Background Image Aspect Ratio:
            </label>
            <select
              id="preserveBackgroundImageAspectRatio"
              className="form-control w-25"
              value={preserveBackgroundImageAspectRatio}
              onChange={(e) =>
                setPreserveBackgroundImageAspectRatio(e.target.value)
              }
            >
              <option value="none">None</option>
              <option value="contain">Contain</option>
              <option value="cover">Cover</option>
            </select>
          </div>
          <div className="form-group my-2 mx-4 ">
            <label htmlFor="backgroundImage">Background Image URL:</label>
            <input
              type="text"
              id="backgroundImage"
              className="form-control"
              value={backgroundImage}
              onChange={(e) => setBackgroundImage(e.target.value)}
            />
          </div>
          <div className="form-check my-2 mx-2">
            <input
              type="checkbox"
              id="eraserModeToggle"
              className="form-check-input"
              checked={!isEraserMode}
              onChange={handleToggleEraserMode}
            />
            <label className="form-check-label" htmlFor="eraserModeToggle">
              Eraser Mode
            </label>
          </div>
        </div>
      </div>
      <ReactSketchCanvas
        ref={sketchCanvasRef}
        style={{
          height: "300px",
          margin:"10px",
        }}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        canvasColor={canvasColor}
        backgroundImage={backgroundImage}
        exportWithBackgroundImage={exportWithBackgroundImage}
        preserveBackgroundImageAspectRatio={preserveBackgroundImageAspectRatio}
        eraserWidth={eraserWidth}
      />
      <div className=" mt-3">
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary mx-2" onClick={handleClearCanvas}>
            Clear
          </button>

          <button className="btn btn-info mx-2" onClick={handleUndo}>
            Undo
          </button>
          <button className="btn btn-info mx-2" onClick={handleRedo}>
            Redo
          </button>
          <button
            className="btn btn-success mx-2"
            style={{ width: "9rem" }}
            onClick={handleExportImage}
          >
            Export Image
          </button>
          <button
            className="btn btn-success"
            style={{ width: "9rem" }}
            onClick={handleExportSvg}
          >
            Export SVG
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={handleResetCanvas}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Day29;
