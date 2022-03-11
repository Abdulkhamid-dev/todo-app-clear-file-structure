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
    


   const fetchingAllDatas = async () => {
    try {
      const {data} = await axios.get(`/todos/?filters[ownerID]=${id}`);
      let todos = data.data
      dispatch(getAllData(todos));
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    fetchingAllDatas();
  }, []);


    return (
        <StyledMain>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<TasksSection category="My day" data={store?.datas}/>} />
                <Route path="/completed" element={<TasksSection category="Completed" data={store?.datas.filter(item => item.attributes?.is_completed === true)}/>}/>
                <Route path="/important" element={<TasksSection category="Important" data={store?.datas.filter(item => item.attributes?.is_important === true)} />}/>
                <Route path="/tasks" element={<TasksSection category="All tasks" data={store?.datas}/>}/>
            </Routes>
        </StyledMain>
    )
}

export default Main
