import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row">
        <div className="col-md-6">
          <img src="/group.png" alt="logo" className="logo"></img>
          <p className="mt-5">
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </p>
          <form className="mt-0 mb-2">
            <input
              type="email"
              className="console"
              placeholder="your email address"
            />
            <button className="truth ms-3">Subscribe</button>
          </form>
          <p>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className="col-md-6">
          <div className="row private">
            <div className="col-md-2 ms-5 me-5">
              <ul>
                <li className="mb-4">
                  <strong>Features</strong>
                </li>
                <li className="mb-4 fw-light">Kneuwealth</li>
                <li className="mb-4 fw-light">Kneusave </li>
                <li className="mb-4 fw-light">Kneuflex</li>
                <li className="mb-4 fw-light">Kneucircle</li>
                <li>Kneusolo</li>
              </ul>
            </div>
            <div className="col-md-2 ms-5 me-5">
              <ul>
                <li className="mb-4">
                  <strong>Company</strong>
                </li>
                <li className="mb-4 fw-light">About</li>
                <li className="mb-4 fw-light">FAQ</li>
                <li>Products</li>
              </ul>
            </div>
            <div className="col-md-2 ms-5 left">
              <ul>
                <li className="mb-4">
                  <strong>Legal</strong>
                </li>
                <li className="mb-4 fw-light">Terms</li>
                <li className="mb-4 fw-light">Privacy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
