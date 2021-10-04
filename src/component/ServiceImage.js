import React from "react";
import { Image, Col } from "react-bootstrap";
import './Services.css';

function ServiceImage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <h1>Welcome to our services!</h1>
            <p id="texty">
              Thank your for enquiring to know more about our services, please
              feel free to go through our services and know which one best suites your
              interest.
            </p>
          </div>

          <div className="col-md-12 col-xs-12">
            <h1>Some awesome galleries from our prestige services</h1>
          </div>
          <br></br>

          <div className="col-md-4 col-xs-6">
            <h4 className = 'caps'>Medicure</h4>
            <p className = 'details'>We give the best treatment to your toes and feet and makes you feel a whole new experience.</p>
            <p className = 'details'>We combine the use the use of mordern tecnologies and skills to give the best of our service.</p>
            <p className = 'details'>Looking the place to treat your feet and have the best of your money? Look no further than Mereon beauty </p>
            
            <br></br>
            <Image
              src="images/rune-enstad-qeuJczNo54w-unsplash.jpg"
              thumbnail
            />
          </div>
          <br></br>

          <div className="col-md-4 col-xs-6">
            <h4 className = 'caps'>Bridal Make ups</h4>
            <p className = 'details'>We give the best treatment to your toes and feet and makes you feel a whole new experience.</p>
            <p className = 'details'>We combine the use the use of mordern tecnologies and skills to give the best of our service.</p>
            <p className = 'details'>Looking the place to treat your feet and have the best of your money? Look no further than Mereon beauty </p>
            <br></br>
            <Image src="images/caro4.jpeg" thumbnail />
          </div>
          <br></br>

          <div className="col-md-4 col-xs-6">
            <h4 className = 'caps'>Spa</h4>
            <p className = 'details'>We give the best treatment to your toes and feet and makes you feel a whole new experience.</p>
            <p className = 'details'>We combine the use the use of mordern tecnologies and skills to give the best of our service.</p>
            <p className = 'details'>Looking the place to treat your feet and have the best of your money? Look no further than Mereon beauty </p>
            <br></br>
            <Image
              src="images/alan-caishan-cU53ZFBr3lk-unsplash.jpg"
              thumbnail
            />
          </div>
          <br></br>
        </div>

        <div className="col-md-6 col-xs-6">
          <h4 className = 'caps'>Facial</h4>
          <p className = 'details'>We give the best treatment to your toes and feet and makes you feel a whole new experience.</p>
            <p className = 'details'>We combine the use the use of mordern tecnologies and skills to give the best of our service.</p>
            <p className = 'details'>Looking the place to treat your feet and have the best of your money? Look no further than Mereon beauty </p>
          <br></br>
          <Image src="images/freestocks-YGmk9UZMdZg-unsplash.jpg" thumbnail />
        </div>
        <br></br>

        <div className="col-md-6 col-xs-6">
          <h4 className = 'caps'>Hair Styling</h4>
          <p className = 'details'>We give the best treatment to your toes and feet and makes you feel a whole new experience.</p>
            <p className = 'details'>We combine the use the use of mordern tecnologies and skills to give the best of our service.</p>
            <p className = 'details'>Looking the place to treat your feet and have the best of your money? Look no further than Mereon beauty </p>
          <br></br>
          <Image
            src="images/shari-sirotnak-oM5YoMhTf8E-unsplash.jpg"
            thumbnail
          />
        </div>
        <br></br>

        <div className="col-md-6 col-xs-6">
          <h4 className = 'caps'>Nails</h4>
          <p className = 'details'>We give the best treatment to your toes and feet and makes you feel a whole new experience.</p>
            <p className = 'details'>We combine the use the use of mordern tecnologies and skills to give the best of our service.</p>
            <p className = 'details'>Looking the place to treat your feet and have the best of your money? Look no further than Mereon beauty </p>
          <br></br>
          <Image
            src="images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg"
            thumbnail
          />
        </div>
        <br></br>

        <div className=" bottom-rw row">
          <div className="col-md-6 col-xs-12">
            <p id="texty">
              For all your beautiful looks and hairstyling, please walk into our shop
              now and feel a new and better experience.
            </p>
          </div>
          <div className=" bookings col-md-6 col-xs-12">
              <h3>BOOKINGS?</h3>
            <p id="texty-booking">
              You can also call or book us for home services. For all your
              bookings, please follow our social meadia handles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceImage;
