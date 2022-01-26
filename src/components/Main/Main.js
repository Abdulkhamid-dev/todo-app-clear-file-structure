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

    const allData = [
        {id: 91, attributes: {category: "sport",
collection_id: null,
content: "asd",
createdAt: "2022-01-26T16:54:50.563Z",
description: null,
due_date: "2012-08-04T00:00:00.000Z",
is_completed: false,
is_important: true,
publishedAt: "2022-01-26T16:54:50.558Z",
title: "asdffc",
updatedAt: "2022-01-26T17:05:38.301Z"}},
{id: 92, attributes: {category: "sport",
collection_id: null,
content: "asdasdd",
createdAt: "2022-01-26T16:54:50.563Z",
description: null,
due_date: "2012-08-04T00:00:00.000Z",
is_completed: true,
is_important: false,
publishedAt: "2022-01-26T16:54:50.558Z",
title: "hello",
updatedAt: "2022-01-26T17:05:38.301Z"}},
{id: 93, attributes: {category: "sport",
collection_id: null,
content: "asdasdd",
createdAt: "2022-01-26T16:54:50.563Z",
description: null,
due_date: "2012-08-04T00:00:00.000Z",
is_completed: false,
is_important: true,
publishedAt: "2022-01-26T16:54:50.558Z",
title: "hi",
updatedAt: "2022-01-26T17:05:38.301Z"}},
{id: 94, attributes: {category: "sport",
collection_id: null,
content: "asdasdd",
createdAt: "2022-01-26T16:54:50.563Z",
description: null,
due_date: "2012-08-04T00:00:00.000Z",
is_completed: true,
is_important: false,
publishedAt: "2022-01-26T16:54:50.558Z",
title: "why",
updatedAt: "2022-01-26T17:05:38.301Z"}}
    ]
    return (
        <StyledMain>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<TasksSection category="My day" data={tasks}/>} />
                <Route path="/completed" element={<TasksSection category="Completed" data={allData.filter((item) => item.attributes.is_completed == true)}/>}/>
                <Route path="/important" element={<TasksSection category="Important"  data={allData.filter((item) => item.attributes.is_important == true)}/>}/>
                <Route path="/tasks" element={<TasksSection category="All tasks" data={tasks}/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
