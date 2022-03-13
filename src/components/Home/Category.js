import React from "react";
import "./Css/category.css";
const Category = () => {
  return (
    <div>
      <section class='row-container'>
        <div class='varity-card'>
          <div class='element image-ecard'>
            <img
              src='https://cdn.pixabay.com/photo/2020/10/26/14/50/pumpkin-5687556__340.jpg'
              alt='girl in theme dress'
            />
          </div>
          <div class='text'>
            <div class='box'>
              <span>Theme Parties</span>
              <p>some content here</p>
            </div>
          </div>
        </div>
        <div class='varity-card'>
          <div class='element image-ecard'>
            <img
              src='https://cdn.pixabay.com/photo/2017/09/06/21/42/model-2723144__340.jpg'
              alt='girl in black dress'
            />
          </div>
          <div class='text'>
            <div class='box'>
              <span>Customize Items</span>
              <p>some content here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
