import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchProducts = async ( ) => {
        const response = await axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .catch((e) => {
          console.error(e);
        });
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log('Products:', products)
/* 
    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
            const data = await res.json();
            setAlbum(data);
            console.log(data);
        }
        fetchRepos();
    }, []) */
  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing
