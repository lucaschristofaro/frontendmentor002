import React from "react";
import Card from "./Card";
import thankymage from "../images/illustration-thank-you.svg";
import "./ThankYou.css";

const ThankYou = ({ rating }) => {
  return (
    <Card>
      <div className="img_thakyou_container">
        <img src={thankymage} alt="" />
      </div>
      <div className="selected">
        <p>You selected {rating} out of 5</p>
      </div>
      <div>
        <div className="thank_title">
          <h2>Thank you!</h2>
        </div>
        <p className="thank_text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
};

export default ThankYou;
