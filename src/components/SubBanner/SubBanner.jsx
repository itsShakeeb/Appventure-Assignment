import React from "react";
import { v4 as uuidv4 } from "uuid";
import Grid from "@material-ui/core/Grid";

import cssStyle from "./SubBanner.module.css";
import subBanner1 from "../../assets/Rectangle1.png";
import subBanner2 from "../../assets/Rectangle2.png";
import subBanner3 from "../../assets/Rectangle3.png";
import subBanner4 from "../../assets/Rectangle4.png";
import subBanner5 from "../../assets/Rectangle5.png";
import subBanner6 from "../../assets/Rectangle6.png";
import chevronWhiteBg from "../../assets/chevron_white_bg.svg";

const SubBanner = () => {
  const banners = [
    {
      id: uuidv4,
      image: subBanner1,
      rightArrow: chevronWhiteBg,
      productName: "PRODUCT NAME",
    },

    {
      id: uuidv4,
      image: subBanner2,
      rightArrow: chevronWhiteBg,
      productName: "PRODUCT NAME",
    },
    {
      id: uuidv4,
      image: subBanner3,
      rightArrow: chevronWhiteBg,
      productName: "PRODUCT NAME",
    },
    {
      id: uuidv4,
      image: subBanner4,
      rightArrow: chevronWhiteBg,
      productName: "PRODUCT NAME",
    },
    {
      id: uuidv4,
      image: subBanner5,
      rightArrow: chevronWhiteBg,
      productName: "PRODUCT NAME",
    },
    {
      id: uuidv4,
      image: subBanner6,
      rightArrow: chevronWhiteBg,
      productName: "PRODUCT NAME",
    },
  ];
  // className={cssStyle.SubBanner}
  // className={cssStyle.SubBannerImg}
  // className={cssStyle.ProductName}
  const subbanner = banners.map((banner, key) => (
    <div key={key} className={cssStyle.SubBanner}>
      <img src={banner.image} alt='' className={cssStyle.SubBannerImg} />
      <p className={cssStyle.ProductName}>{banner.productName}</p>
      <img
        src={banner.rightArrow}
        alt={banner.rightArrow}
        className={cssStyle.RightArrow}
      />
    </div>
  ));
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {subbanner}
    </div>
  );
};

export default SubBanner;
