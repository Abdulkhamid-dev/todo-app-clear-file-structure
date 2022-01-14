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
      const data = await axios.get("/todos");
      const {data: todos} = data
      console.log(data);
      setTodos(todos.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <StyledTasksList>
      {todos.map((item) => {
        return <TaskItem key={item.id} title={item.attributes.title} />;
      })}
    </StyledTasksList>
  );
};

export default Tasks;
