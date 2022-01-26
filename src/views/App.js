import React, { useState, lazy, Suspense, useCallback } from "react";
import Swal from "sweetalert2";
import MainContext from "../context/Context";
import axios from "../utils/axios";
const Header = lazy(() => import("../components/Header/Header"));
const Main = lazy(() => import("../components/Main/Main"));
const Auth = lazy(() => import("../views/Auth/index"));

const App = () => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.user || "{}"));
  const [tasks, setTasks] = useState([]);
  window.onload = () => {
    if (localStorage.token) {
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
    window.location.reload(true)
  };

  const getAllData = useCallback( async () => {
    try {
      const {data: {data :allTodos}} = await axios.get("/todos");
      console.log(allTodos);
      setTasks(allTodos);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  },[tasks])




  if (logged) {
    return (
      <MainContext.Provider value={{ user, tasks, signOut, getAllData, setTasks }}>
        <Suspense fallback="Loading...">
          <div>
            <Header />
            <Main />
          </div>
        </Suspense>
      </MainContext.Provider>
    );
  }
  return (
    <Suspense fallback="Loading...">
      <Auth />
    </Suspense>
  );
};

export default App;
