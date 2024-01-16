import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";
import PostAuthor from "../components/PostAuthor";
const PostDetails = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor/>
           <div className="post-de">
           <Link to={`/posts/werwer/edit`} className="btn sm primary"></Link>
          <Link to={`/posts/werwer/delete`} className="btn sm danger"></Link>
           </div>
        </div>
        <h1>This is the post title</h1>
      <div className="post-detail_thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
        sequi. Ex velit at ullam blanditiis voluptatibus suscipit earum qui modi
        numquam pariatur nostrum itaque dolore perferendis est, labore
        reiciendis voluptatum!
      </p>
      <p>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id blanditiis
        atque, veniam esse repellat iusto quisquam, aperiam eius, mollitia
        officia commodi est. Ducimus unde libero rerum dolor, dolore doloremque
        corporis?{" "}
      </p>  
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sapiente unde nostrum debitis eveniet excepturi nemo eaque officiis ut. Aliquid tenetur, ratione nobis iste unde commodi quos quia voluptatem minima! Eius incidunt voluptatem dolorem laboriosam fugiat harum at explicabo vitae optio vero, sit illo distinctio neque. Praesentium iusto saepe dolor officiis temporibus eveniet excepturi necessitatibus quidem asperiores, iure harum consequuntur error nobis voluptatem nemo! Ratione provident blanditiis qui inventore dolore ab. Omnis, dolorem deserunt culpa quibusdam ullam ipsa nostrum et sequi? Sunt fugit pariatur nesciunt dicta animi nostrum incidunt reiciendis, possimus culpa facere aspernatur minus iusto non eius velit! Dignissimos, ducimus ipsa autem corrupti ad harum praesentium tempore fuga consequatur facilis tempora magnam error iusto soluta cumque maiores culpa numquam.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis cupiditate iusto hic assumenda amet ratione possimus repellat cumque perspiciatis sunt, vero tempora temporibus cum rerum dignissimos. Ullam, quam laborum animi optio eaque dolores eveniet harum eos eius, nulla temporibus in reprehenderit impedit nihil corporis dolor. Aliquid placeat aliquam dolorum, neque pariatur facilis numquam eaque maiores error. Odio amet laboriosam doloribus explicabo tempore, magnam ducimus, pariatur nam autem natus reprehenderit ad dicta nulla illum ut adipisci? In et sint qui laborum culpa, vel, dolor perspiciatis molestias maxime dolorem at voluptas eos totam assumenda ut provident voluptatem tenetur! Aliquid tenetur molestiae voluptatem animi iure eos saepe doloremque hic rem numquam! Dicta quisquam repudiandae eius quam nam vero similique voluptas officiis sed accusantium voluptatum beatae, esse tenetur quos aliquam ipsam vitae a sapiente ipsa! Culpa consectetur aperiam deleniti praesentium inventore dolor placeat mollitia nostrum omnis. Quis rem corrupti expedita, beatae eveniet rerum exercitationem quidem quisquam quaerat. Quas beatae corporis voluptatibus inventore, accusamus consectetur a? Perferendis commodi ratione laborum minima est molestiae veniam suscipit ipsa vero velit quod perspiciatis, non eveniet pariatur numquam! Laborum, placeat commodi reprehenderit quasi, beatae dolore provident cum sit facere possimus eos voluptatem tempore magni minus doloribus sunt laboriosam.</p>
      </div>
    
    </section>
  );
};

export default PostDetails;
