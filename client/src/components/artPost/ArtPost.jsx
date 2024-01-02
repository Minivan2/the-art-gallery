import './artPost.css'
import imageSrc from '../../assets/images/girl-with-a-pearl-earring-detail-1.jpg'
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"

export default function ArtPost() {
  return (
    <section className='artPost'>
      <div className="post-container">
        <div className="img">
          <img src={imageSrc} alt=""/>
        </div>
        <div className="buttons">
          <button className='edit-button'>
            <BsPencilSquare />
          </button>
          <button className='delete-button'>
            <AiOutlineDelete />
          </button>
        </div>
        <div className="text">
          <h2 className='title'>Girl With A Pearl Earring (1665)</h2>
          <h4 className="author">Johannes Vermeer</h4>
          <hr/>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur a quas quidem earum vero ullam at voluptatibus qui aliquam. Velit temporibus, placeat voluptatem sapiente ipsa sit non harum dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi unde et corrupti ut molestiae iusto porro. Ab provident explicabo, accusantium deleniti aliquam quas odio quibusdam vero vitae officia aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam, sapiente ab neque quidem dicta reprehenderit cumque itaque eveniet iste, eius maxime necessitatibus sint nostrum nisi a officiis! Aliquam, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aliquam consectetur ut rem quibusdam at harum, vel repudiandae laudantium repellendus quam blanditiis maiores dolore! Id deserunt molestias fugiat? Debitis, repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque consequatur, ex nisi architecto dolor maiores, labore, perferendis quia praesentium eligendi ratione? Qui eveniet laudantium nam. Animi harum quo aliquid quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur a quas quidem earum vero ullam at voluptatibus qui aliquam. Velit temporibus, placeat voluptatem sapiente ipsa sit non harum dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi unde et corrupti ut molestiae iusto porro. Ab provident explicabo, accusantium deleniti aliquam quas odio quibusdam vero vitae officia aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam, sapiente ab neque quidem dicta reprehenderit cumque itaque eveniet iste, eius maxime necessitatibus sint nostrum nisi a officiis! Aliquam, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aliquam consectetur ut rem quibusdam at harum, vel repudiandae laudantium repellendus quam blanditiis maiores dolore! Id deserunt molestias fugiat? Debitis, repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque consequatur, ex nisi architecto dolor maiores, labore, perferendis quia praesentium eligendi ratione? Qui eveniet laudantium nam. Animi harum quo aliquid quod?</p>
        </div>
      </div>
    </section>
  )
}
