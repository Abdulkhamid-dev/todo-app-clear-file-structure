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
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setTodo((prevState) => ({ ...prevState, [name]: checked }));
    } else {
      setTodo((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <StyledAddTaskForm className="addTask">
      <div className="main">
        <button className="plus_btn">
          <AiOutlinePlus color={`${COLORS.greydark}`} size={`${pxToRem(16)}`} />
        </button>
        <form className="fake_form"  onClick={toggleModal}>
          <p>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Add Task"
              disabled
            />
          </p>
          <button type="submit" onClick={handleSubmit}>
            Create
          </button>
        </form>
        <div
          id="myModal"
          className="modal"
          style={{ display: open ? "flex" : "none" }}
        >
          <div className="modal-content">
           <div className="modal_header">
            <h3>Add task</h3>
           <span className="close" onClick={toggleModal}>
              &times;
            </span>
           </div>
           <form onSubmit={handleSubmit}>
           <div className="modal_body">
          <div>
            <label htmlFor="name">Task name</label>
            <input
              type="text"
              id="name"
              onChange={handleInputChange}
              value={title}
              name="title"
              placeholder="Task name"
            />
          </div>
          <div>
          <label htmlFor="content">Task content</label>
            <input
              type="text"
              id="content"
              onChange={handleInputChange}
              value={content}
              name="content"
              placeholder="Task content"
            />
          </div>
          <div>
            <label htmlFor="due_date">Date</label>
            <input
              type="date"
              id="due_date"
              onChange={handleInputChange}
              value={due_date}
              name="due_date"
            />
          </div>
         <div className="checkbox_block">
         <div>
            <label htmlFor="is_important">Important</label>
            <input
              type="checkbox"
              id="is_important"
              onChange={handleInputChange}
              value={is_important}
              name="is_important"
            />
          </div>
          <div>
            <label htmlFor="is_completed">Complited</label>
            <input
              type="checkbox"
              id="is_completed"
              onChange={handleInputChange}
              value={is_completed}
              name="is_completed"
            />
          </div>
         </div>
          <div className="select">
          <label htmlFor="category">Category</label>
            <select name="category" id="category" value={category} onChange={handleInputChange}>
              <option  disabled>Select</option>
              <option value="education">Education</option>
              <option value="sport">Sport</option>
              <option value="todo">Todo</option>
            </select>
          </div>
          <div className="module_footer">
          <button type="submit">
            Create
          </button>
          </div>
           </div>
        </form>
          </div>
        </div>
      </div>
    </StyledAddTaskForm>
  );
}

export default AddTask;
