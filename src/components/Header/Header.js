import React, {useRef} from "react";
import { StyledHeader } from "./Header.style";
import {CgMenuGridO} from 'react-icons/cg'
import {VscSettingsGear} from 'react-icons/vsc'
import {RiQuestionMark} from 'react-icons/ri'
import {AiOutlineNotification} from 'react-icons/ai'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {VscSearch} from 'react-icons/vsc'

function Header() {
  const inputRef = useRef();
  const toggleEditing = () => {
    inputRef.current.focus();
  };

  return (
    <StyledHeader>
      <div className="navbar">
        <div className="navIcon">
            <a href="#!"><CgMenuGridO color="#fff" size={20}/></a>
        </div>
        <h3>
          <a href="#!">To Do</a>
        </h3>
      </div>
      <div className="searchBLock" onClick={toggleEditing}>
        <i><VscSearch color="#346fef" size={16} /></i>
       <form>
       <input type="search" ref={inputRef} />
       </form>
      </div>
      <div>
        <ul className="menu">
          <div>
            <li>
              <div className="navIcon">
                <a href="#!"><VscSettingsGear color="#fff" size={20}/></a>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="navIcon">
                <a href="#!"><RiQuestionMark color="#fff" size={20}/></a>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="navIcon notification">
                <a href="#!"><AiOutlineNotification color="#fff" size={20}/>
                <span className="notificationCount">
                  2
                </span>
                </a>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="navIcon">
                <a href="#!"><MdOutlineAccountCircle color="#fff" size={24}/></a>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
