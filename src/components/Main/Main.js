import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from '../../utils/axios'
import { StyledMain } from './Main.styles'
import Sidebar from '../SIdebar/Sidebar'
import TasksSection from '../TasksSection/Index'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react/cjs/react.development'
import {getAllData, getAllImportant, getAllCompleted} from '../../store/data/dataActions'
// import MainContext from '../../context/Context'
// import { useContext } from 'react/cjs/react.development'

function Main(props) {
    // const [allData, setAllData] = useState([])
    // const contextUser = useContext(MainContext)
    // const { smth} = contextUser
    // console.log(smth);
    const dispatch = useDispatch()
    const store = useSelector(state => state)
   const {id} = store.auth.user
    
   console.log(store.datas);


  const fetchingAllDatas = async () => {
    try {
      const {data} = await axios.get(`/todos/?filters[ownerID]=${id}`);
      let todos = data.data
      console.log(todos);
      dispatch(getAllData(todos));
    } catch (error) {
      console.log(error);
    }
  }
  const fetchingAllImportants = async () => {
    try {
      const {data} = await axios.get(`/todos/?filters[ownerID]=${id}&filters[is_important]=true`);
      let todos = data.data
      console.log(todos);
      dispatch(getAllImportant(todos));
    } catch (error) {
      console.log(error);
    }
  }
  const fetchingAllCompleted = async () => {
    try {
      const {data} = await axios.get(`/todos/?filters[ownerID]=${id}&filters[is_completed]=true`);
      let todos = data.data
      console.log(todos);
      dispatch(getAllCompleted(todos));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchingAllDatas();
    fetchingAllImportants();
    fetchingAllCompleted();
  }, []);


    return (
        <StyledMain>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<TasksSection category="My day" data={store?.datas}/>} />
                <Route path="/completed" element={<TasksSection category="Completed" data={store?.datas}/>}/>
                <Route path="/important" element={<TasksSection category="Important" data={store?.datas} />}/>
                <Route path="/tasks" element={<TasksSection category="All tasks" data={store?.datas}/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
