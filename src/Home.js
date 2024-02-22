import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <div className="row">
        <div className="col-md-7 first-half">
          <h1>Save, Grow, Spend</h1>
          <h2 className="mt-4">Get Smart, Grow Strong, And Spend Well.</h2>
          <p className="mt-5">
            Ever Wondered How To Take The Struggle Off Your Financial Life, And
            Make A Big Entrance Into Financial Freedom? Gargle No Further,
            You're In The Right Place.
          </p>
          <img src="/ellipse-one.png" alt="user" />
          <img src="/ellipse-two.png" className="sum" alt="use" />
          <img src="/ellipse-three.png" className="sum" alt="see" />
          <img src="/ellipse-four.png" className="sum" alt="man" />
          <img src="/thirty.png" className="ordinal" alt="figure" />
          <span className="time mt-5 ms-5 d-none">
            Realtime Users
          </span>

          <div>
            <button>
              Explore <img src="/arrow.png" className="arrow" alt="arrow" />
            </button>
          </div>
        </div>
        <div className="col-md-5">
          <img src="/phone.png" className="mobile" alt="mobile" />
        </div>
      </div>
    </div>
  );
}
