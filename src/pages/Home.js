import React from "react";
import BodyText from "../component/BodyText";
import Testimonial from "../component/Testimonial";
import Footer from "../component/Footer";



function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className='row'>
          <div className = "Col md={12} mdPull={12} xs={12} xsHidden md={12} xsOffset={12} mdPush={12}">
            <BodyText />
            <Testimonial />
            <Footer /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
