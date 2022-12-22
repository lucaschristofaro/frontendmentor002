import React from "react";
import Card from "./Card";
import starImage from "../images/icon-star.svg";
import "./Rating.css";
import { useState } from "react";

const Rating = ({ rating, setRating, setDisplayThankYou }) => {
  const [activeRatings, setActiveRatings] = useState({
    oneStars: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });
  const handleSubmit = () => {
    if (!rating) return;
    setDisplayThankYou(true);
  };
  return (
    <Card>
      <div className="img_star_container">
        <img src={starImage} alt="" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <div
          className={
            activeRatings.oneStars ? "rating_note active" : "rating_note"
          }
          onClick={() => {
            setActiveRatings({
              oneStars: true,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            });
            setRating(1);
          }}
        >
          1
        </div>
        <div
          className={
            activeRatings.twoStars ? "rating_note active" : "rating_note"
          }
          onClick={() => {
            setActiveRatings({
              oneStars: false,
              twoStars: true,
              threeStars: false,
              fourStars: false,
              fiveStars: false,
            });
            setRating(2);
          }}
        >
          2
        </div>
        <div
          className={
            activeRatings.threeStars ? "rating_note active" : "rating_note"
          }
          onClick={() => {
            setActiveRatings({
              oneStars: false,
              twoStars: false,
              threeStars: true,
              fourStars: false,
              fiveStars: false,
            });
            setRating(3);
          }}
        >
          3
        </div>
        <div
          className={
            activeRatings.fourStars ? "rating_note active" : "rating_note"
          }
          onClick={() => {
            setActiveRatings({
              oneStars: false,
              twoStars: false,
              threeStars: false,
              fourStars: true,
              fiveStars: false,
            });
            setRating(4);
          }}
        >
          4
        </div>
        <div
          className={
            activeRatings.fiveStars ? "rating_note active" : "rating_note"
          }
          onClick={() => {
            setActiveRatings({
              oneStars: false,
              twoStars: false,
              threeStars: false,
              fourStars: false,
              fiveStars: true,
            });
            setRating(5);
          }}
        >
          5
        </div>
      </div>
      <button className="submit_btn" onClick={handleSubmit}>
        Submit
      </button>
    </Card>
  );
};

export default Rating;
