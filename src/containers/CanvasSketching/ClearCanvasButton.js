import React from "react";
import { useCanvas } from "./CanvasContext";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button className="btn-canvas--clear" onClick={clearCanvas}>
      Clear
    </button>
  );
};
