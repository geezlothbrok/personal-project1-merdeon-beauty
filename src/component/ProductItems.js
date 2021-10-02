import React from 'react';
import { Image } from 'react-bootstrap';
import './Product.css';

function ProductItems() {
    return (
        <div>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-md-12 col-xs-12'>
                        <h4>We have all range and variety of beauty and skin care products to choose from.
                            we sell all your favourite products at affordable prices both in retail and wholesale.
                        </h4>
                        <h4>Walk to our shop and buy all products now.</h4>
                    </div>
                </div>
                <div className = 'first-image row'>
                    <div className = 'col-md-4 col-xs-6'>
                    <Image src="images/mariah-hewines-5sfOSzDbmHQ-unsplash.jpg" thumbnail />
                    </div>
                    <div className = 'col-md-4 col-xs-6'>
                    <Image src="images/markus-spiske-MrHYzRp62-4-unsplash.jpg" thumbnail />
                    </div>
                    <div className = 'col-md-4 col-xs-6'>
                    <Image src="images/daniela-elsini-JLaUTQJJiW4-unsplash.jpg" thumbnail />
                    </div>
                </div>

                <div className = ' first-image row'>
                    <div className = 'col-md-6 col-xs-6'>
                    <Image src="images/henry-co-OpjlRo-31SI-unsplash.jpg" thumbnail />
                    </div>
                    <div className = 'col-md-6 col-xs-6'>
                    <Image src="images/jazmin-quaynor-FoeIOgztCXo-unsplash.jpg" thumbnail />
                    </div>
                </div>

                <div className = ' first-image row'>
                    <div className = 'col-md-12 col-xs-12'>
                        <h4>We also do door to door delivery nation wide. purchase from our social media pages</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItems
