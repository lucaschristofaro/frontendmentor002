import { useState } from "react";
import "./App.css";

import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";
function App() {
  const [displayThankYou, setDisplayThankYou] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <div className="App">
      {displayThankYou ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setDisplayThankYou={setDisplayThankYou}
        />
      )}
    </div>
  );
}
export default App;
