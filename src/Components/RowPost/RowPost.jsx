import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import { imageUrl,API_KEY } from '../../constants/constants'
import axios from '../../constants/axios'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlid, seturlid] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setmovies(response.data.results.sort(function (a, b) { return 0.5 - Math.random() }))
    })
  },[])
  const handlevideo=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.lenth!==0){
        seturlid(response.data.results[0])
        console.log(response.data.results[0].key);
      }else{
        console.log('trailer not available');
      }
    })
  }
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
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
        { urlid && <YouTube opts={opts}  videoId={urlid.key} />}
    </div>
  )
}

export default RowPost