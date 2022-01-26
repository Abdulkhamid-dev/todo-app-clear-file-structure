import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledMain } from './Main.styles'
import Sidebar from '../SIdebar/Sidebar'
import TasksSection from '../TasksSection/Index'
import MainContext from '../../context/Context'
import { useContext } from 'react/cjs/react.development'

function Main() {
    const contextUser = useContext(MainContext)
    const { tasks} = contextUser
    return (
        <StyledMain>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<TasksSection category="My day" data={tasks}/>} />
                <Route path="/completed" element={<TasksSection category="Completed" data={tasks.filter((item) => item.attributes.is_completed = true)}/>}/>
                <Route path="/important" element={<TasksSection category="Important"  data={tasks.filter((item) => item.attributes.is_important = true)}/>}/>
                <Route path="/tasks" element={<TasksSection category="All tasks" data={tasks}/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
