import "./gallery.css"
import React from "react"
import { post } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Gallery = () => {
  return (
    <section className="gallery">
        <div class='card-container'>
            {post.map((item) => (
                <div class='card' key={item.id}>
                <div className="image">
                    <img src={item.img} alt=''/>
                </div>
                <div className="text">
                    <h3 className='title'>{item.title} ({item.year})</h3>
                    <h5 className='author'>by {item.creator}</h5>
                    <hr/>
                    <p className='desc'>{item.desc.slice(0, 180)}</p>
                </div>
                <div className="post">
                    <Link to={`/details/${item.id}`} className="link">
                        <button className="learn">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}
