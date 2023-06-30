import React, { useState } from "react";
import "./Home.scss";
import Profile from "../../component/profile/Profile";
import Content from "../../component/content/Content";
import {CgMenuCheese} from "react-icons/cg";

function Home() {
    const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="header">
            <h1>Todo App</h1>
            <div className="menuBar">
              {<CgMenuCheese className="menu" onClick={() => setMenu(!menu)} />}
            </div>
          </div>
          <div className="row">
            <div className="left-col">
              <Profile menu={menu}/>
            </div>
            <div className="right-col">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
