import React, { useState } from "react";
import style from "./Nav.module.css";
import { Outlet, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(true)
  const handleCourses = ()=>{
    navigate("/courses")
    if(courses){

      setCourses(!courses);
    }
  }

  const handleLogo = ()=>{
    navigate("/")
    if(!courses){

      setCourses(!courses)
    }
  }

  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://files.codingninjas.in/pl-ninja-16706.svg"
            alt="logo"
            onClick={handleLogo}
          />
          <h4>Coding Ninjas</h4>
        </div>
        <div className={style.nav_details}>
          <button onClick={handleCourses}>{courses? "Courses" : "onCourses"}</button>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
