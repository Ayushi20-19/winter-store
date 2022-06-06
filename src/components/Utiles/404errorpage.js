import React from "react";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex-column flex-center'>
        <h1 className='cursor-pointer' onClick={() => navigate("/")}>
          Oops page not found- <i>Go back to home</i>
        </h1>
        <img
          className='width-60'
          src='https://i.pinimg.com/originals/14/eb/6b/14eb6b88a9bd2f324d18e60bb3040e7c.gif'
          alt='raven'
        />
      </div>
    </>
  );
};

export default Errorpage;
