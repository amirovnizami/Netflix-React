import { useNavigate } from 'react-router-dom'
import React from 'react'

const Card = ({ item, type }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            console.log(item);
            navigate('/details', {
                state: {
                    id: item.id,
                    type: type || item.media_type
                }
            });
        }}>
            <div className='w-[150px] justify-self-center hover:scale-110 transition duration-200 ease-out'>
                <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title || 'Movie Poster'}
                    className='h-[230px] w-[160px]'
                />
            </div>
        </button>
    );
};

export default Card;
