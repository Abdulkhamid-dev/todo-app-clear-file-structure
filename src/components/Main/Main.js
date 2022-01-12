import React from 'react'
import { StyledMain } from './Main.styles'
import Sidebar from '../SIdebar/Sidebar'
import TasksSection from '../TasksSection/Index'

function Main() {
    return (
        <StyledMain>
            <Sidebar/>
            <TasksSection/>
        </StyledMain>
    )
}

export default Main
