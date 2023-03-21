// drag drop file component
import React from "react";
import { useState } from "react";

export const DragDropFile = () => {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef(null);

  function handleFile(files) {
    const filePath = URL.createObjectURL(files[0]);
    alert("Uploaded file path: " + filePath);
  }

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export const ProcessingButton = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setIsProcessing(true);
    // API call
    setTimeout(() => {
      setIsProcessing(false);
      setInputValue("");
    }, 3000);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <input
        className="input-box"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Your URL"
      />
      <button
        className="processing-button"
        onClick={handleButtonClick}
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Submit"}
      </button>
    </div>
  );
};
