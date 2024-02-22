import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row">
        <div className="col-md-6">
          <img src="/group.png" alt="logo" class="logo"></img>
          <p className="mt-5">
            Stay up to date on the latest features and releases by joining our
            newsletter.
          <form className="mt-0 mb-2">
            <input
              type="email"
              class="console"
              placeholder="your email address"
            />
            <button>
              Subscribe
            </button>
          </form>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
