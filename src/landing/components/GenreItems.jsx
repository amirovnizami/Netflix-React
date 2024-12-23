const GenreItems = ({genres}) =>{
   return(
    <div className="flex gap-2 ">
        {genres?.map((item)=> <div className="bg-zinc-600 rounded p-1 text-zinc-300">{item.name}</div> )}
    </div>
   )
}
export default GenreItems