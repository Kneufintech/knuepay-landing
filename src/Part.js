import React from "react";
import "./Part.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Part() {
  return (
    <div className="Part">
      <Carousel>
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="true"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div>
              <div class="carousel-item active">
                <img src="/card-three.png" class="d-block w-100" alt="..." />
              </div>
            </div>
            <div>
              <div class="carousel-item active">
                <img src="/card-one.png" class="d-block w-100" alt="..." />
              </div>
            </div>
            <div>
              <div class="carousel-item active">
                <img src="/card-two.png" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}