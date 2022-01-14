import React, { useRef } from "react";
import { StyledAddTaskForm } from "./Index.styles";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "../../utils/axios";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";
import { useState } from "react/cjs/react.development";
// import './index.css'

function AddTask() {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    due_date: "",
    is_important: false,
    is_completed: false,
    category: "",
    collection_id: null,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setTodo((prevState) => ({ ...prevState, [name]: checked }));
    } else {
      setTodo((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const inputRef = useRef();
  const toggleInput = () => {
    inputRef.current.focus();
  };

  const hanleCreateTodo = async () => {
    try {
      const { data } = await axios.post("/todos", todo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
    try {
      const { data } = await axios.post("/todos", { data: todo });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { title, content, due_date, is_important, is_completed, category } =
    todo;
  return (
    <StyledAddTaskForm className="addTask" onClick={toggleInput}>
      <div>
        <button className="plus_btn">
          <AiOutlinePlus color={`${COLORS.greydark}`} size={`${pxToRem(16)}`} />
        </button>
        <form>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={handleInputChange}
              value={title}
              name="title"
              placeholder="Add Task"
              required
            />
          </p>
          <p>
            <label htmlFor="content">Content</label>
            <input
              type="text"
              id="content"
              onChange={handleInputChange}
              value={content}
              name="content"
              placeholder="Add Content"
              required
            />
          </p>
          <p>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={handleInputChange}
              id="category"
              value={category}
            >
              <option value="sport">Sport</option>
              <option value="education">Education</option>
              <option value="todo">Todo</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </p>
          <p>
            <label htmlFor="due_date">Date</label>
            <input
              type="date"
              id="due_date"
              onChange={handleInputChange}
              value={due_date}
              name="due_date"
              required
            />
          </p>
          <p>
            <label htmlFor="is_important">Important</label>
            <input
              type="checkbox"
              id="is_important"
              onChange={handleInputChange}
              value={is_important}
              name="is_important"
            />
          </p>
          <p>
            <label htmlFor="is_completed">Completed</label>
            <input
              type="checkbox"
              id="is_completed"
              onChange={handleInputChange}
              value={is_completed}
              name="is_completed"
            />
          </p>
          <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
      </div>
    </StyledAddTaskForm>
  );
}

export default AddTask;
