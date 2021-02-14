import React from "react";
import cssStyle from "./PreviewRibbon.module.css";

const PreviewRibbon = (props) => {
  return (
    <div>
      <div className={cssStyle.RibbonWrapper}>
        <p>Preview text discount sale 50%</p>
      </div>
    </div>
  );
};

export default PreviewRibbon;
