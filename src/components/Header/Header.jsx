import React from "react";
import ImageContainer from "./ImageContainer/ImageContainer";
import accountRounded from "../../assets/account rounded.svg";
import userCart from "../../assets/cart button.svg";
import searchLogo from "../../assets/Group.svg";

import cssStyle from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <header className={cssStyle.HeaderWrapper}>
        <ImageContainer image={accountRounded} />
        <ImageContainer image={userCart} />
        {/* <div
          style={{
            height: "28px",
            width: "28px",
            backgroundColor: "#000000",
            borderRadius: "50%",
            // margin: "35px 10px",
          }}
        ></div> */}
        <i
          className='fa fa-circle fa-2x'
          style={{ margin: "40px 0" }}
          aria-hidden='true'
        ></i>

        <ImageContainer image={searchLogo} />
      </header>
    </div>
  );
};

export default Header;
