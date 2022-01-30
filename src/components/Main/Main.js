import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from '../../utils/axios'
import { StyledMain } from './Main.styles'
import Sidebar from '../SIdebar/Sidebar'
import TasksSection from '../TasksSection/Index'
import { useState } from 'react/cjs/react.development'
// import MainContext from '../../context/Context'
// import { useContext } from 'react/cjs/react.development'

function Main(props) {
    // const [allData, setAllData] = useState([])
    // const contextUser = useContext(MainContext)
    // const { smth} = contextUser
    // console.log(smth);
    console.log(props);


//   const getAllData = async () => {
//     try {
//       const {data} = await axios.get("/todos");
//       let todos = data.data
//       console.log(todos);
//       setAllData(todos)
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getAllData();
//   }, []);
    return (
        <StyledMain>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<TasksSection category="My day"/>} />
                <Route path="/completed" element={<TasksSection category="Completed"/>}/>
                <Route path="/important" element={<TasksSection category="Important" />}/>
                <Route path="/tasks" element={<TasksSection category="All tasks"/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
