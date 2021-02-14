import React from "react";
import { v4 as uuidv4 } from "uuid";
import RightArrow from "../../assets/chevron.svg";
import cssStyle from "./InfoCard.module.css";

const InfoCard = () => {
  const cards = [
    {
      id: uuidv4,
      text: "Today is good Day",
      deemedText: "Nice News",
      border: "1px",
    },
    {
      id: uuidv4,
      text: "Today is good Day",
      deemedText: "Nice News",
      border: "1px",
    },
    {
      id: uuidv4,
      text: "Today is good Day",
      deemedText: "Nice News",
      border: "1px",
      padding: "20px",
    },
    {
      id: uuidv4,
      text: "Today is good Day",
      deemedText: "Nice News",
      border: "1px",
    },
    { id: uuidv4, text: "Today is good Day", deemedText: "Nice News" },
  ];
  const cardDiv = cards.map((card, key) => (
    <div
      className={cssStyle.CardContainer}
      style={{
        borderRight: `${card.border} solid dimgrey`,
      }}
      key={key}
    >
      <p className={cssStyle.Text}>{card.text}</p>
      <p className={cssStyle.DeemedText}>{card.deemedText}</p>
      <img className={cssStyle.Arrow} src={RightArrow} alt='' />
    </div>
  ));
  return <div className={cssStyle.CardWrapper}>{cardDiv}</div>;
};

export default InfoCard;
