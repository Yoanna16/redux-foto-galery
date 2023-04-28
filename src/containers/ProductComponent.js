import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        return (
            <div className='four wide column'>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img src={product.url}></img>
                        </div>
                        <div className='content'>
                            <div className='header'>{product.title}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    })

    return renderList



}

export default ProductComponent
