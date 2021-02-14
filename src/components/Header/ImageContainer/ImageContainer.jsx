import React from "react";
import cssStyle from "./ImageContainer.module.css";
const ImageContainer = (props) => {
  return (
    <div>
      <div>
        <img
          src={props.image}
          alt='user-circle'
          className={cssStyle.ImageWrapper}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
