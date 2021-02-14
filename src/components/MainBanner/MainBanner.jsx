import React from "react";
import Banner from "../../assets/Rectangle@2x.png";
import cssStyle from "./MainBanner.module.css";
import Grid from "@material-ui/core/Grid";

//className={cssStyle.BannerWrapper}
// className={cssStyle.MainBanner}
const MainBanner = () => {
  return (
    <div className={cssStyle.BannerWrapper}>
      <div>
        <img src={Banner} alt='banner' className={cssStyle.BannerImage} />
      </div>
    </div>
  );
};

export default MainBanner;
