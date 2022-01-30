import React, { useState, lazy, Suspense, useEffect } from "react";
import MainContext from "../context/Context";
import axios from '../utils/axios'
const Header = lazy(() => import("../components/Header/Header"));
const Main = lazy(() => import("../components/Main/Main"));
const Auth = lazy(() => import("../views/Auth/index"));

const App = () => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.user || "{}"));
  const [smth, setSmth] = useState([])
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
    } catch (error) {
      console.log(error);
    }
    window.location.reload(true)        
  };

  

  if (logged) {
    return (
      <MainContext.Provider value={{ user,  signOut}}>
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
