import React, { useState } from 'react'
import './Banner.css'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../constants/axios'
import { useEffect } from 'react'
import YouTube from 'react-youtube'

function Banner() {
  const [Movie, setMovie] = useState()
  const [urlid, seturlid] = useState('')

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

      setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
  }, [ ])
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
    <div style={{backgroundImage:`url(${Movie?imageUrl+Movie.backdrop_path:" "})`}} className='Banner'>
        <div className="content" onClick={()=>{seturlid("")}}>
            <h1 className="title">{Movie ? Movie.title : "movie Name"}</h1>
            <div className="banner_buttons">
                <button className="button" onClick={()=>handlevideo(Movie.id)}>Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">
              {Movie?Movie.overview:"loram ipsum"}    
            </h1>
        </div>
        { urlid && <YouTube className='video' opts={opts}  videoId={urlid.key} />}
        <div className="fade_bottom">
          
        </div>
    </div>
  )
}

export default Banner