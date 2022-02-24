import React, { Component } from "react";

import slider1 from "./pictures/slider1.jpeg";
import slider2 from "./pictures/slider2.jpg";
import slider3 from "./pictures/slider3.jpg";
import plant from "./pictures/Plant.jpg";
import p1 from "./pictures/p1.jpg";
import p2 from "./pictures/p2.jpg";
import p3 from "./pictures/p3.jpg";
import p4 from "./pictures/p4.jpg";
import p5 from "./pictures/p5.jpg";
import p6 from "./pictures/p6.jpg";
import p7 from "./pictures/p7.jpg";
import p8 from "./pictures/p8.jpg";
import p9 from "./pictures/p9.jpg";
import pj1 from "./pictures/pj1.jpg";
import pj2 from "./pictures/pj2.jpg";
import pj3 from "./pictures/pj3.jpg";
import t1 from "./pictures/t1.jpg";
import t2 from "./pictures/t2.jpg";
import t3 from "./pictures/t3.jpg";

import "./HomeStyle.css";

class Home extends Component {
  render() {
    const imagesize = {
      height: "380px",
    };
    return (
      <div className=" bg-light hmain">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slider1}
                alt=""
                style={imagesize}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block ">
                <h5 className="col-md-12 col-lg-12 col=sm-auto col-xl-12 col-12">
                  Green & Clean
                </h5>
                <p className="col-md-12 col-lg-12">
                  He who plants a tree,Plants a hope..!{" "}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={slider2}
                alt=""
                style={imagesize}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="col-md-12 col-lg-12">Law Of nature</h5>
                <p className="col-md-12 col-lg-12">
                  Every Flower is a soul blossoming in nature
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={slider3}
                alt=""
                style={imagesize}
                className="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="col-md-12 col-lg-12">Law Of nature</h5>
                <p className="col-md-12 col-lg-12">
                  Always do your Best What you plant now harvest Later
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container">
          <div className="context">
            <h1 className="heading mt-5">Why Plant??</h1>

            <div className="line " img-fluid>
              <p className="para">
                {" "}
                When we plant trees we do a great service for our environment.
                Improve your microclimate, improve your mood, Plant trees today!
                Plants release this oxygen into the atmosphere. This release is
                important because most living things, including the plants
                themselves, use the oxygen during respiration to release the
                energy stored in glucose in a form that they can use for all
                life-sustaining processes.
              </p>
              <img src={plant} alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="container gallery">
          <h2 className="heading2 text-center mt-5 pb-3">Our Plants</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p1} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p2} alt="" className="img-fluid mb-2" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p3} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p4} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p5} alt="" className="img-fluid mb-2" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p6} alt="" className="img-fluid mb-2" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p7} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p8} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 Images">
              <img src={p9} alt="" className="img-fluid mb-4" />
            </div>
          </div>
        </div>

        <div className="container projects">
          <h2 className="heading3 text-center mt-3 pb-3">
            Projects In your Province{" "}
          </h2>
          <div className="row ">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <img src={pj1} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <img src={pj2} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <img src={pj3} alt="" className="img-fluid " />
            </div>
          </div>
        </div>

        <div class="container">
          <h2 className="heading4">Fact & Figures</h2>
          <p className="para2">
            campaigns to plant 5,000 trees in Karachi and rural areas of Sindh
          </p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>District</th>
                <th> Area in hectares</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tharparkar/Umerkot</td>
                <td>109,516</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Karachi</td>
                <td>116,862</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dadu</td>
                <td>159,031</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Thatta</td>
                <td>13,045</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container team">
          <h2 className="heading5 text-center mt-3 pb-4">Meet Our team</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <img src={t1} alt="" className="img-fluid shadow-lg" />
              <p className="names text-center">
                Syed Muhammad Kashan
                <br />
                <p>SSUET</p>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <img src={t2} alt="" className="img-fluid shadow-lg" />
              <p className="names text-center">
                Mool Shankar
                <br />
                <p>SSUET</p>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <img src={t3} alt="" className="img-fluid shadow-lg" />
              <p className="names text-center">
                {" "}
                Anand Kumar
                <br />
                <p>SSUET</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;