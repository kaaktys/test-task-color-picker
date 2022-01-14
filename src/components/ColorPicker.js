import React, { useState } from "react";

import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

const ColorPicker = ({ value, onChange, onSubmit, onCancel }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState({
    r: "225",
    g: "195",
    b: "125",
    a: "25",
  });

  const styles = reactCSS({
    default: {
      wrapper: {
        display: "flex",
        flexDirection: "column",
        width: "150px",
      },
      color: {
        width: "140px",
        height: "115px",
        borderRadius: "3px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      popover: {
        position: "absolute",
        zIndex: "3",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
      swatch: {
        padding: "6px",
        background: "#ffffff",
        borderRadius: "2px",
        cursor: "pointer",
        display: "inline-block",
        boxShadow: "0 0 0 1px rgba(0,0,0,.2)",
      },
    },
  });

  function onClick() {
    setShowPicker(!showPicker);
  }

  function onSlidersBlockToggle() {
    setShowPicker(false);
  }

  function onChange(color) {
    setColor(color.rgb);
  }

  function onCancel() {
    console.log("clicked");
    setColor({
      r: "225",
      g: "195",
      b: "125",
      a: "25",
    });
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.swatch} onClick={onClick}>
        <div style={styles.color} />
      </div>
      {showPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={onSlidersBlockToggle} />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      ) : null}
      <button onClick={onCancel}>cancel</button>
    </div>
  );
};

export default ColorPicker;
