import React from "react";
import "../Home/inputpage.css";
import { DragDropFile } from "../Home/inputpage";
import { ProcessingButton } from "../Home/inputpage";
import "../Home/Home.css";

export const Home = () => {
  return (
    <>
      <div className="heading">
        <h1>S3 to IPFS Converter</h1>
      </div>
      <div className="page">
        <DragDropFile />
        <h1>OR</h1>
        <ProcessingButton />
      </div>
    </>
  );
};
