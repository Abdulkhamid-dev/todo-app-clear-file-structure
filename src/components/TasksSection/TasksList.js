import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { StyledTasksList } from "./Index.styles";
import axios from "../../utils/axios";
// import Data from "../../Mocks/todos";
import TaskItem from "./TaskItem";
import MainContext from "../../context/Context";
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../../store/index'

const Tasks = (props) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  const [loader, setLoader] = useState(false)
  const contextUser = useContext(MainContext)
  const {user} = contextUser
  const [allData, setAllData] = useState([])
  console.log(store);

  const getAllData = async () => {
    setLoader(true)
    try {
      const {data} = await axios.get(`/todos`);
      const { data: allData } = data;
      setAllData(allData);
      setLoader(false)
    } catch (error) {
      console.log(error);
      setLoader(false)
    }
  }



  const deleteTask = async (id) => {
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed === true) {
        try {
          const filteredTasks = allData.filter(i => i.id !== id)
          setAllData(filteredTasks)
         axios.delete(`/todos/${id}`)
      } catch (error) {
          console.log(error).then(() => {
            Swal.fire(
              'Can not delete!',
              'Your file has not been deleted',
              'error'
            )
          })
      }
      } 
    })
    getAllData()
   }



  
console.log(props);

  if (!loader) {
    return (
      <StyledTasksList>
        {[].map((item) => {
          const { id, attributes } = item;
          return (
            <TaskItem
              compeleted={attributes.is_completed}
              id={id}
              key={id}
              title={attributes.title}
              important={attributes.is_important}
              handleClick={() => deleteTask(item.id)}
              data={{...attributes, id}}
            />
          );
        })}
      </StyledTasksList>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default Tasks;
