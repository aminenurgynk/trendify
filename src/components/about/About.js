import React from "react";
import { Carousel } from "antd";
import "./About.css";

const About = () => {
  return (
    <Carousel autoplay>
      <div className="carousel-slide">
        <img
          src="https://static.zarahome.net/8/contentEcom/dto_imagen/home/slider/desktop/Slider_playa.jpg?20240323021206&imformat=chrome&imwidth=1827&impolicy=zarahome-itxmedium"
          alt="Item 1"
          className="carousel-img1"
          width="100%"
        />
        <div className="carousel-caption">
          <h3>New Season Fashion</h3>
          <p>Discover the Spring / Summer '24 collection.</p>
        </div>
      </div>

      <div className="carousel-slide">
        <img
          src="https://static.pullandbear.net/2/cms/assets/uploads/hstwdsv_1.jpg?imwidth=1500&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240323020706"
          alt="Item 1"
          className="carousel-img1"
          width="100%"
        />
        <div className="carousel-caption">
          <h3>New Season Fashion</h3>
          <p>Discover the Spring / Summer '24 collection.</p>
        </div>
      </div>

      <div className="carousel-slide">
        <img
          src="https://static.pullandbear.net/2/cms/assets/uploads/landscape29_1.jpg?imwidth=1500&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240323020706"
          alt="Item 1"
          className="carousel-img1"
          width="100%"
        />
        <div className="carousel-caption">
          <h3>New Season Fashion</h3>
          <p>Discover the Spring / Summer '24 collection.</p>
        </div>
      </div>

      <div className="carousel-slide">
        <img
          src="https://st-levis.mncdn.com/Content/img/Unisite/web.jpg"
          alt="Item 2"
        />
        <div className="carousel-caption">
          <h3>New Season Fashion</h3>
          <p>Discover the Spring / Summer '24 collection.</p>
        </div>
      </div>
    </Carousel>
  );
};

export default About;
