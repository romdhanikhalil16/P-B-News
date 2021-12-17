import React from "react";
import "./item.css";
import img8 from "../assets/img8.jpg";
import img3 from "../assets/img3.jfif";
import img6 from "../assets/img6.jpg";
const Item = () => {
  return (
    <div>
      <div className="article_container">
        <img className="big_article" src={img8} alt="image" />

        <div className="article_title">
          <p>the title relative to the picture will take this placeholder</p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img
                class="card-img-top"
                className="img_size"
                src={img3}
                alt="Card image cap"
              />
              <h5 class="card-title">title of post</h5>

              <a href="#" class="btn btn-primary">
                more
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img
                class="card-img-top"
                className="img_size"
                src={img6}
                alt="Card image cap"
              />
              <h5 class="card-title">title of post</h5>

              <a href="#" class="btn btn-primary">
                more
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img
                class="card-img-top"
                className="img_size"
                src={img6}
                alt="Card image cap"
              />
              <h5 class="card-title">title of post</h5>

              <a href="#" class="btn btn-primary">
                more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
