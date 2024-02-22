import React from "react";
import "./Product.css";
import Faq from "./Faq.js";

export default function Product() {
  return (
    <div className="Product">
      <div className="row">
        <div className="col-md-7">
          <h2>
            For better experience <span className="down">DOWNLOAD</span> our app
          </h2>
          <button>Download</button>
        </div>
        <div className="col-md-5">
          <img src="/mockupp.png" alt="phonee" class="mt-5 ms-3" />
        </div>
      </div>
      <Faq />
    </div>
  );
}
