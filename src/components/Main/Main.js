import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from '../../utils/axios'
import { StyledMain } from './Main.styles'
import Sidebar from '../SIdebar/Sidebar'
import TasksSection from '../TasksSection/Index'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react/cjs/react.development'
import {getAllData} from '../../store/data/dataActions'

function Main(props) {
  const [showSide, setShowSide] = useState(false)
    const dispatch = useDispatch()
    const store = useSelector(state => state)
   const {id} = store.auth.user
    


   const fetchingAllDatas = async () => {
    try {
      const {data} = await axios.get(`/todos/?filters[ownerID]=${id}`);
      let todos = data.data
      dispatch(getAllData(todos));
    } catch (error) {
      console.log(error);
    }
  }
 
  const hideHandler = () => {
    setShowSide(!showSide);
  }

  useEffect(() => {
    fetchingAllDatas();
  }, []);


    return (
        <StyledMain>
            <Sidebar show={showSide} handler={hideHandler}/>
            <Routes >
                <Route path="/" element={<TasksSection handler={hideHandler} category="My day" data={store?.datas}/>} />
                <Route path="/completed" element={<TasksSection handler={hideHandler} category="Completed" data={store?.datas.filter(item => item.attributes?.is_completed === true)}/>}/>
                <Route path="/important" element={<TasksSection handler={hideHandler} category="Important" data={store?.datas.filter(item => item.attributes?.is_important === true)} />}/>
                <Route path="/tasks" element={<TasksSection handler={hideHandler} category="All tasks" data={store?.datas}/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
