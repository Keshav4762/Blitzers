import React from "react";
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Blitzer's</h1>
          <p>The most dangerous squad</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are the one and only solution to the Tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving abality in children.
            </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est, odio adipisci molestiae perspiciatis ratione. Odit hic neque laboriosam modi aut accusamus dolore quos distinctio, itaque doloribus ipsam! Doloremque vero eligendi quas veritatis modi, perspiciatis optio itaque quo nam fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nobis ab quisquam iure voluptatibus obcaecati, at ea deleniti voluptas asperiores officiis ducimus maiores, assumenda vel.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>

                <div style={{animationDelay:"0.9s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>

            </article>
        </div>
      </div>
    </>
  );
}

export default Home;
