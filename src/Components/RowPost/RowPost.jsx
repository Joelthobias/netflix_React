import React,{useEffect,useState} from 'react'
import './RowPost.css'
import { imageUrl } from '../../constants/constants'
import axios from '../../constants/axios'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setmovies(response.data.results)
    })
  }, [ ])
  
  return (
    <div className='row'>
        <h1 className="title">{props.title}</h1>
        <div className="posters">
          {
            movies.map((obj)=>

              <img src={`${imageUrl+obj.backdrop_path}`} className={props.isSmall ? 'smallimg' : "poster"} alt="Poster" />
            )
          }            
        </div>
    </div>
  )
}

export default RowPost