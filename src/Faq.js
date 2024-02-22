import React from "react";
import "./Faq.css";
import Footer from "./Footer.js";
export default function Faq() {
  return (
    <div className="Faq">
      <div className="section">
        <h3 className="text-center">Frequently Asked Questions </h3>
        <ul className="">
          <li className="sole mt-3">
            <a href="https://my.com/">
              {" "}
              <strong>+</strong> How do I sign up for Kneupay?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> What kinds of financial services does Kneupay
              offer?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> How do I deposit and withdraw funds?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> How do I contact customer support?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> What is Kneupay's privacy policy?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> How do I know my data is secure?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> What are the fees associated with Kneupay?
            </a>
          </li>
          <li className="sole mt-3">
            <a href="https://my.com/">
              <strong>+</strong> How does Kneupay protect against fraud?
            </a>
          </li>
          <li className="sole mt-3 mx-auto">
            <a href="https://my.com/">
              <strong>+</strong> Does Kneupay offer any special features or
              benefits?
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
