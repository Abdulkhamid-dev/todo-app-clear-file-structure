import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styles";
import { VscMenu } from "react-icons/vsc";
import { BsSun } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import { VscCalendar, VscHome, VscMail } from "react-icons/vsc";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { CgFolderAdd } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import { IoMdAttach } from "react-icons/io";
import { ImCheckmark2 } from "react-icons/im";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

function Sidebar() {
  const inputRef = useRef();
  const toggleEditing = () => {
    inputRef.current.focus();
  };
  return (
    <StyledSidebar>
      <div className="sidebar">
        <div className="sidebarHeader">
          <div className="sidebarNavBtn">
            <button>
              <i>
                <VscMenu color={`${COLORS.darkGrey}`} size={`${pxToRem(20)}`} />
              </i>
            </button>
          </div>
        </div>
        <div className="sidebarContent">
          <nav>
            <ul>
              <NavLink to="/" className="menu-list-item">
                <li>
                  <div>
                    <span>
                      <BsSun
                        color={`${COLORS.darkGrey}`}
                        size={`${pxToRem(16)}`}
                      />
                    </span>
                    <span className="itemTitle">My Day</span>
                    <span className="taskCount">2</span>
                  </div>
                </li>
              </NavLink >
              <NavLink  to="/important" className="menu-list-item" >
                <li>
                  <div>
                    <span>
                      <BiStar
                        color={`${COLORS.darkGrey}`}
                        size={`${pxToRem(16)}`}
                      />
                    </span>
                    <span className="itemTitle">Important</span>
                    <span className="taskCount">2</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/completed" className="menu-list-item">
                <li>
                  <div>
                    <span>
                      <VscCalendar
                        color={`${COLORS.darkGrey}`}
                        size={`${pxToRem(16)}`}
                      />
                    </span>
                    <span className="itemTitle">Completed</span>
                    <span className="taskCount">2</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/tasks">
                <li>
                  <div>
                    <span>
                      <VscHome
                        color={`${COLORS.darkGrey}`}
                        size={`${pxToRem(16)}`}
                      />
                    </span>
                    <span className="itemTitle">Tasks</span>
                    <span className="taskCount">2</span>
                  </div>
                </li>
              </NavLink>
            </ul>
          </nav>
          <div className="sidebarAddList">
            <div className="addInput" onClick={toggleEditing}>
              <button className="plusBtn">
                <AiOutlinePlus
                  color={`${COLORS.greydark}`}
                  size={`${pxToRem(14)}`}
                />
              </button>
              <form>
              <input type="text" ref={inputRef} placeholder="Create list" />
              </form>
            </div>
            <div className="addGroup">
              <button>
                <CgFolderAdd
                  color={`${COLORS.addIcon}`}
                  size={`${pxToRem(15)}`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="sidebarFooter">
          <div>
            <a href="#!">
              <VscMail color={`${COLORS.greydark}`} />
            </a>
            <a href="#!">
              <VscCalendar color={`${COLORS.greydark}`} />
            </a>
            <a href="#!">
              <RiGroupLine color={`${COLORS.greydark}`} />
            </a>
            <a href="#!">
              <IoMdAttach color={`${COLORS.greydark}`} />
            </a>
            <a href="#!">
              <ImCheckmark2 color={`${COLORS.blueActive}`} />
            </a>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
