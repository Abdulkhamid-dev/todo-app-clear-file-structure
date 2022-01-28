import React, { useRef, useContext, useState } from "react";
import MainContext from '../../context/Context'
import {COLORS} from '../../constants/index'
import { StyledHeader } from "./Header.style";
import { CgMenuGridO } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";
import { RiQuestionMark } from "react-icons/ri";
import { AiOutlineNotification } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { MdOutlineAccountCircle } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";

function Header() {
  const inputRef = useRef();
  const toggleEditing = () => {
    inputRef.current.focus();
  };
 const [hide, setHide] = useState(true)

 const toggleHide = () => {
   setHide(!hide)
 }

  const contextUser = useContext(MainContext)
  const {user, signOut} = contextUser
  const firstCharacter = user.username[0].toUpperCase()

  return (
    <StyledHeader>
      <div className="navbar">
        <div className="navIcon">
          <a href="#!">
            <CgMenuGridO color="#fff" size={20} />
          </a>
        </div>
        <h3>
          <a href="#!">To Do</a>
        </h3>
      </div>
      <div className="searchBLock" onClick={toggleEditing}>
        <i>
          <VscSearch color="#346fef" size={16} />
        </i>
        <form>
          <input type="search" ref={inputRef} />
        </form>
      </div>
      <div>
        <ul className="menu">
          <div>
            <li>
              <div className="navIcon">
                <a href="#!">
                  <VscSettingsGear color="#fff" size={20} />
                </a>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="navIcon">
                <a href="#!">
                  <RiQuestionMark color="#fff" size={20} />
                </a>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="navIcon notification">
                <a href="#!">
                  <AiOutlineNotification color="#fff" size={20} />
                  <span className="notificationCount">2</span>
                </a>
              </div>
            </li>
          </div>
          <div>
            <li>
           <div className="navIcon account" onClick={toggleHide}>
           <div className="dropdown ">
                <button className="dropbtn">{firstCharacter}</button>
              {
                hide ? null :  (
                  <div className="dropdown-content">
                   <div>
                   <p>Signed in as</p>
                  <h5>{user.username}</h5>
                   </div>
                  <hr />
                  <a onClick={signOut}> <span><ImExit color={`${COLORS.sidebarItem}`}/></span> <span>Sign out</span> </a>
                </div>
                )
              }
              </div>
           </div>
            </li>
          </div>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
