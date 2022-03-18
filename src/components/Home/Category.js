import React from "react";
import "./Css/category.css";
const Category = () => {
  return (
    <div>
      <section className='row-container'>
        <div className='varity-card'>
          <div className='element image-ecard'>
            <img
              src='https://cdn.pixabay.com/photo/2020/10/26/14/50/pumpkin-5687556__340.jpg'
              alt='girl in theme dress'
            />
          </div>
          <div className='text'>
            <div className='box'>
              <span>Theme Parties</span>
              <p>some content here</p>
            </div>
          </div>
        </div>
        <div className='varity-card'>
          <div className='element image-ecard'>
            <img
              src='https://cdn.pixabay.com/photo/2017/09/06/21/42/model-2723144__340.jpg'
              alt='girl in black dress'
            />
          </div>
          <div className='text'>
            <div className='box'>
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
