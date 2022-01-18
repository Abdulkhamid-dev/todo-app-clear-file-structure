import React, { useEffect, useState } from "react";
import { StyledTasksList } from "./Index.styles";
import axios from "../../utils/axios";
// import Data from "../../Mocks/todos";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false);

  const getTodos = async () => {
    try {
      setLoader(true)
      const data = await axios.get("/todos");
      const {data: todos} = data
      console.log(data);
      setTodos(todos.data);
      setLoader(false)
    } catch (error) {
      console.log(error);
      setLoader(false)
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
        const {data} = axios.delete(`/todos/${id}`)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

  useEffect(() => {
    getTodos();
  }, []);

   if (!loader) {
    return (
      <StyledTasksList>
        {todos.map((item) => {
          return <TaskItem compeleted={item.attributes.is_completed} key={item.id} title={item.attributes.title} important={item.attributes.is_important}  handleClick={() => handleDeleteTodo(item.id)}/>;
        })}
      </StyledTasksList>
    )  
   } else {
     return <h2>Loading...</h2>
   }
   
};

export default Tasks;
