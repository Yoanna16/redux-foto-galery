import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setAlbums } from '../redux/actions/productActions'

const AlbumListing = () => {
    const albums = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchAlbums = async ( ) => {
        const response = await axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .catch((e) => {
          console.error(e);
        });
        dispatch(setAlbums(response.data))
    }

    useEffect(() => {
        fetchAlbums();
    }, [])
    console.log('Albums:', albums)
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
        <AlbumComponent />
    </div>
  )
}

export default AlbumListing
