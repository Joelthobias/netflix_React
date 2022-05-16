import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident recusandae ipsum libero. Mollitia ut repellendus obcaecati? Hic eos optio est mollitia corporis deleniti, velit dignissimos explicabo cupiditate inventore doloremque.

            </h1>
        </div>
        <div className="fade_bottom">
          
        </div>
    </div>
  )
}

export default Banner