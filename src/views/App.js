import React, { useState, lazy, Suspense, useCallback } from "react";
import Swal from "sweetalert2";
import {useDispatch, useSelector} from 'react-redux'
import MainContext from "../context/Context";
import axios from "../utils/axios";
const Header = lazy(() => import("../components/Header/Header"));
const Main = lazy(() => import("../components/Main/Main"));
const Auth = lazy(() => import("../views/Auth/index"));

const App = () => {
  const store = useSelector(state => state)
  const { auth} = store
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.user || "{}"));
  const [tasks, setTasks] = useState([]);
  const [smth, setSmth] = useState([]);
  window.onload = () => {
    if (auth) {
      setLogged(true);
    }
  };

  const signOut = () => {
    try {
      setUser({});
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("hello");
    } catch (error) {
      console.log(error);
    }
    window.location.reload(true);
  };

  const getAllData = async () => {
    try {
      const { data } = await axios.get("/todos");
      let todos = data.data;
      console.log(todos);
      setSmth(todos);
      // setTasks(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const searchTodo = async (e, str) => {
    e.preventDefault()
    try {
      const { data } = await axios.get(
        `/todos?filters[title][$contains]=${str}`
      );
      let searchResult = data.data;
      console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(smth);

       return (
        logged ? (
          <MainContext.Provider
          value={{ user, tasks, signOut, getAllData, setTasks, smth, searchTodo }}
        >
          <Suspense fallback="Loading...">
            <div>
              <Header />
              <Main />
            </div>
          </Suspense>
        </MainContext.Provider>
        ) :
        (
          <Suspense fallback="Loading...">
          <Auth />
        </Suspense>
        )
       )
};

export default App;
