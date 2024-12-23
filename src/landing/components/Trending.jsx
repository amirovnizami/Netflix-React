import { useEffect, useState } from 'react'
import CustomSelect from './CustomSelect'
import Reason from './Reason'
import MovieCard from './MovieCard'

function trending({setItem}) {
    const options = [{title :"Movie",value : "movie"}, {title :"Tv Shows",value : "tv"}]
    const [selectedOption, setSelectedOption] = useState("movie");
    const [data, setData] = useState([])

    const getData = async (option) => {
        const response = await fetch(`http://localhost:5001/api/v1/${option}/trending`, {
            headers: {
                "Accept": "application/json"
            }

        })
        const data = await response.json()
        setData(data.content);
        const item = data.content

        console.log(item);
    }

    useEffect(() => {
        getData(selectedOption)
    }, [selectedOption])
    return (
        <div className='  bg-[#000000] px-[150px] no-scrollbar  '>
            <h2 className='text-white font-medium text-2xl font-roboto mb-4'>Trending Now</h2>
            <CustomSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options} />
            <div className=' flex overflow-scroll bg-black h-auto mx-auto gap-2 no-scrollbar '>
                {data.map((item, index) => (
                    <MovieCard item = {item} index = {index} setItem = {setItem} />
                ))}
            </div>
            <div className='mt-[80px]'>
                <h2 className='text-white font-medium size text-2xl font-roboto mb-4'>More Reasons to Join Now</h2>
                <Reason />
            </div>

        </div>
    )
}

export default trending