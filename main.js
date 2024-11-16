import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

// Keen Slider
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
//

var slider = new KeenSlider("#bird-slider", {
  slides: {
    perView: "auto",
    // spacing: 24,
  },
  mode: "snap",
  loop: false,
  rtl: false,
  // slidesPerView: "auto"
});
