import './details.css'
import React, { useState } from "react"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { post } from "../../assets/data/data"

export const Details = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    let posts = post.find((posts) => posts.id === parseInt(id))
    if (posts) {
      setPosts(posts)
    }
  }, [id])

  return (
    <>
      {posts ? (
        <section className='art-post'>
          <div className="post-container">
            <div className="post-left">
              <img src={posts.img} alt=""/>
            </div>
            <div className="post-right">
              <h2 className='title'>{posts.title} ({posts.year})</h2>
              <h4 className="author">by {posts.creator}</h4>
              <hr/>
              <p className="description">{posts.desc}</p>
                <div className="buttons">
                <button className='edit-button'>
                  <BsPencilSquare />
                </button>
                <button className='delete-button'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
