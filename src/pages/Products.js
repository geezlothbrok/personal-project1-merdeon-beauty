import React from 'react'
import Footer from '../component/Footer'
import ProductItems from '../component/ProductItems'

function Products() {
    return (
        <div>
            <div className = 'container-fluid'>
                <ProductItems />
            </div>
            <Footer />
        </div>
    )
}

export default Products
