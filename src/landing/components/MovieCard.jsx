import React from 'react'

function MovieCard({ item, index,setItem }) {

  return (
    <div className='relative min-w-[160px] h-[250px] mt-6 hover:scale-110 transition duration-220 mx-3 ease-in' onClick={() => {
      setItem(item)
    }}>
      <p className='text-black  absolute -left-7 bottom-2 font-bold drop-shadow-[0_0_4px_#fff] text-[100px] z-10'>{index + 1}</p>
      <img className=' overflow-auto w-full h-full rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
    </div>
  )

}

export default MovieCard