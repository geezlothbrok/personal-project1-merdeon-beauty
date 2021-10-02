import React from 'react'
import CardItems from './CardItems'

function CardsData() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="Col md={3} mdPull={3} xs={6} xsHidden md={6} xsOffset={6} mdPush={6}">
                    <CardItems src = 'images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg'
                    title =  {<h5>hee</h5>}
                    text = 'Im very satisfied with their service, now i feel more comfortable'/>
                </div>
            </div>
        </div>
    )
}

export default CardsData
