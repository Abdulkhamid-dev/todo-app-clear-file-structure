import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledMain } from './Main.styles'
import Sidebar from '../SIdebar/Sidebar'
import TasksSection from '../TasksSection/Index'
import MainContext from '../../context/Context'
import { useContext } from 'react/cjs/react.development'

function Main() {
    const contextUser = useContext(MainContext)
    const { smth} = contextUser
    console.log(smth);
    return (
        <StyledMain>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<TasksSection category="My day" data={smth}/>} />
                <Route path="/completed" element={<TasksSection category="Completed" data={smth.filter((item) => item.attributes.is_completed = true)}/>}/>
                <Route path="/important" element={<TasksSection category="Important"  data={smth.filter((item) => item.attributes.is_important = true)}/>}/>
                <Route path="/tasks" element={<TasksSection category="All tasks" data={smth}/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
