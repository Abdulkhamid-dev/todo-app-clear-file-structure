import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { StyledTasksList } from "./Index.styles";
import axios from "../../utils/axios";
// import Data from "../../Mocks/todos";
import TaskItem from "./TaskItem";
import MainContext from "../../context/Context";

const Tasks = (props) => {
  const [loader, setLoader] = useState(false)
  const contextUser = useContext(MainContext)
  const {tasks, getAllData, setTasks} = contextUser
  const {title, id, is_important, is_completed, collection_id, category, content, due_date} = tasks

  useEffect(() => {
    contextUser.getAllData();
  }, []);


 


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
          const filteredTasks = tasks.filter(i => i.id !== id)
          setTasks(filteredTasks)
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



  


  if (!loader) {
    return (
      <StyledTasksList>
        {props.filteredData.map((item) => {
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
