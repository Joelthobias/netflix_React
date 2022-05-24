import React,{useEffect,useState} from 'react'
import './RowPost.css'
import ReactPlayer from 'react-player/youtube'
import { imageUrl,API_KEY } from '../../constants/constants'
import axios from '../../constants/axios'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlid, seturlid] = useState(' ')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setmovies(response.data.results.sort(function (a, b) { return 0.5 - Math.random() }))
    })
  },[])
  const handlevideo=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
    })
  }
  
  return (
    
    <div className='row'>
        <h1 className="title">{props.title}</h1>
        <div className="posters">
          {
            movies.map((obj)=>

              <img onClick={()=>handlevideo(obj.id)} src={`${imageUrl+obj.backdrop_path}`} className={props.isSmall ? 'smallimg' : "poster"} alt="Poster" />
            )
          }
        </div>
        <ReactPlayer   url="https://youtu.be/ucr9puXoizY/" />
    </div>
  )
}

export default RowPost