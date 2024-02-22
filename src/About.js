import React from "react";
import "./About.css";
import Product from "./Product.js";

export default function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col-md-6">
          <img src="/mock.png" alt="phone" />
        </div>
        <div className="col-md-6">
          <h3 className="mt-5">What You Need To Know About Us</h3>
          <p className="first">
            Kneupay was founded in (2023) with the goal of simplifying finance
            for everyone. We believe that everyone should have access to
            financial tools, and services that empower them to take control of
            their money. Our mission is to make finance simple, accessible, and
            secure for everyone.
          </p>
          <p className="second">
            Our team is made up of experts in finance, technology, and user
            experience, who are passionate about making finance accessible to
            users.
          </p>
          <div>
            <button>
              Read more <img src="/arrow.png" className="arrow" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}
