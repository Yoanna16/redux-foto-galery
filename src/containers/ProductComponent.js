import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites } from '../redux/actions/productActions'


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    function handleAddTOFavorites(product) {
        dispatch(addToFavorites(product))
    }
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
                        <button onClick={() => handleAddTOFavorites({albumId: product.albumId, id: product.id })}>
                            Add to favorites
                        </button>
                    </div>

                </div>
            </div>
        )
    })

    return renderList



}

export default ProductComponent
