import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const FavoritesListing = () => {
    const favorites = useSelector((state) => state.allAlbums.favorites);

    const renderFavList = favorites.map((album) => {
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
{/*                         <button onClick={() => handleAddTOFavorites({albumId: album.albumId, id: album.id, title: album.title, url: album.url, thumbnailUrl: album.thumbnailUrl })}>
                            Add to favorites
                        </button> */}
                    </div>

                </div>
            </div>
        )
    })
  return renderFavList
}

export default FavoritesListing
