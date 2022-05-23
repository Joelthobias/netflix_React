import React, { useState } from 'react'
import './Banner.css'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../constants/axios'
import { useEffect } from 'react'
function Banner() {
  const [Movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

      setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
  }, [ ])
  
  return (
    <div style={{backgroundImage:`url(${Movie?imageUrl+Movie.backdrop_path:" "})`}} className='Banner'>
        <div className="content">
            <h1 className="title">{Movie ? Movie.title : "movie Name"}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">
              {Movie?Movie.overview:"loram ipsum"}    
            </h1>
        </div>
        <div className="fade_bottom">
          
        </div>
    </div>
  )
}

export default Banner