import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="container-fluid">
      <div className=" testimony-header Col md={12} mdPull={12} xs={12} xsHidden md={12} xsOffset={12} mdPush={12}">
        <h2>What does our satisfied clients have to say?</h2>
        <div className="line"></div>
      </div>

      <div className="wrap">
        <div className="text col-md-6 col-xs-12">
          <div className=" happy col-md-6 col-xs-12">
            <h5>
              "I really do enjoy their services, each day they make me feel
              brand new and comfortable"
            </h5>
            <p className="test-para">-Angela Brown</p>
          </div>
          <div className="col-md-6 col-xs-12">
            <img
              width={150}
              height={150}
              src="images/peyman-farmani-rg5v1ywp6Jo-unsplash.jpg"
            />
          </div>
        </div>
        <div className=" text col-md-6 col-xs-12">
          <div className=" happy col-md-6 col-xs-12">
            <h5>
              "I really do enjoy their services, each day they make me feel
              brand new and comfortable"
            </h5>
            <p className="test-para">-Angela Brown</p>
          </div>
          <div className="col-md-6 col-xs-12">
            <img
              width={150}
              height={150}
              src="images/majid-akbari-6fcbjkc8wGQ-unsplash.jpg"
            />
          </div>
        </div>
        <div className="text col-md-6 col-xs-12">
          <div className=" happy col-md-6 col-xs-12">
            <h5>
              "I really do enjoy their services, each day they make me feel
              brand new and comfortable"
            </h5>
            <p className="test-para">-Angela Brown</p>
          </div>
          <div className="col-md-6 col-xs-12">
            <img
              width={150}
              height={150}
              src="images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg"
            />
          </div>
        </div>
        <div className=" text col-md-6 col-xs-12">
          <div className=" happy col-md-6 col-xs-12">
            <h5>
              "I really do enjoy their services, each day they make me feel
              brand new and comfortable"
            </h5>
            <p className="test-para">-Angela Brown</p>
          </div>
          <div className="col-md-6 col-xs-12">
            <img
              width={150}
              height={150}
              src="images/marcus-lewis-csKAiMU1OrU-unsplash.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
