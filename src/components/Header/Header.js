import React, { useRef, useContext, useState } from "react";
import MainContext from "../../context/Context";
import { COLORS } from "../../constants/index";
import { StyledHeader } from "./Header.style";
import { CgMenuGridO } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";
import { RiQuestionMark } from "react-icons/ri";
import { AiOutlineNotification } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { MdOutlineAccountCircle } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import axios from "../../utils/axios";
import {useDispatch, useSelector} from 'react-redux';

function Header() {
  const dispatch = useDispatch()
  const store = useSelector(state => state.auth)
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const toggleEditing = () => {
    inputRef.current.focus();
  };

 
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/todos?filters[title][$contains]=${search}`
      );
      let searchResult = data.data;
      console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
  };
  const [hide, setHide] = useState(true);

  const contextUser = useContext(MainContext);
  const { user, signOut } = contextUser;
  const firstCharacter = user.username[0].toUpperCase();
  const toggleHide = () => {
    setHide(!hide);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSignOut = () => {
    const {initialAuthState} = store
    dispatch({
      type: "SIGN_OUT",
      payload: {
      ...store,
      initialAuthState: {
        token: "",
        user: {
          id: null,
          name: "",
          email: "",
        },
       }
      },
    });
    signOut();
  };
  
  console.log(store);

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
        <form onSubmit={handleForm}>
          <input
            type="search"
            value={search}
            onChange={handleInput}
            ref={inputRef}
          />
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
                  <span className="notificationCount">{store.tasks.length}</span>
                </a>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="navIcon account" onClick={toggleHide}>
                <div className="dropdown ">
                  <button className="dropbtn">{firstCharacter}</button>
                  {hide ? null : (
                    <div className="dropdown-content">
                      <div>
                        <p>Signed in as</p>
                        <h5>{user.username}</h5>
                      </div>
                      <hr />
                      <a onClick={handleSignOut}>
                        {" "}
                        <span>
                          <ImExit color={`${COLORS.sidebarItem}`} />
                        </span>{" "}
                        <span>Sign out</span>{" "}
                      </a>
                    </div>
                  )}
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
