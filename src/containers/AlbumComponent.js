import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites } from '../redux/actions/productActions'


const AlbumComponent = () => {
    const albums = useSelector((state) => state.allAlbums.albums);
    const dispatch = useDispatch();

    function handleAddTOFavorites(album) {
        dispatch(addToFavorites(album))
    }
    const renderList = albums.map((album) => {
        return (
            <div className='four wide column'>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img src={album.url}></img>
                        </div>
                        <div className='content'>
                            <div className='header'>{album.title}</div>
                        </div>
                        <button onClick={() => handleAddTOFavorites({albumId: album.albumId, id: album.id })}>
                            Add to favorites
                        </button>
                    </div>

                </div>
            </div>
        )
    })

    return renderList



}

export default AlbumComponent
