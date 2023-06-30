import React, { useState } from "react";
import "./Profile.scss";
import {FcTodoList} from "react-icons/fc";
import {RiCalendarTodoLine} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
import {GoDotFill} from "react-icons/go";


function Profile({menu}) {
  return (
    <>
     {<div className={`Profile ${menu && 'active'}`}>
        <div className="userProfile">
          <img src="./img/user.png" alt="user" className="userImg" />
          <div className="userInfo">
            <p className="name">Jeevan Shrestha</p>
            <p className="profession">Web Developer</p>
          </div>
          </div>
          <hr />
          <div className="tasksList">
            <div className="left">
              <FcTodoList className='icon'/>
            </div>
            <ul className="right">
              <li className="title">Today Tasks</li>
              <li className="listItem">
                <GoDotFill className="icon"/>
                <p className="item">Proffessional</p>
              </li>
              <li className="listItem">
                <GoDotFill className="icon"/>
                <p className="item">Freelance</p>
                </li>
              <li className="listItem">
                <GoDotFill className="icon"/>
                <p className="item">Work</p>
                </li>
              <li className="listItem">
                <GoDotFill className="icon"/>
                <p className="item">Add FIlter</p>
                </li>
            </ul>
          </div>
          <div className="scheduleTask">
            <RiCalendarTodoLine className="icon" />
            <p>Schedule Tasks</p>
          </div>
          <div className="setting">
            <IoSettingsOutline className="icon"/>
            <p>Settings</p>
          </div>
        </div>}
    </>
  );
}

export default Profile;
