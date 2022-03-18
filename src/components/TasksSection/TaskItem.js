import React, { useState, useEffect } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { StyledTask } from "./Index.styles";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils/index";
import axios from "../../utils/axios";

const TaskItem = (props) => {
  const {
    id,
    is_important,
    is_completed,
  } = props.data;
  const [isImportant, setIsImportant] = useState(is_important);
  const [isCompleted, setIsCompleted] = useState(is_completed);

  useEffect(() => {
    if (isImportant !== is_important) {
      handleImportant();
    }
  }, [isImportant]);

  useEffect(() => {
    if (isCompleted !== is_completed) {
      handleCompleted();
    }
  }, [isCompleted]);

  const handleCompleted = async () => {
    try {
       await axios.put(`/todos/${id}`, {
        data: { is_completed: !is_completed },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImportant = async () => {
    try {
     await axios.put(`/todos/${id}`, {
        data: { is_important: !is_important },
      });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <StyledTask>
      <div>
        <div className="input_finished">
            <input
              type="checkbox"
              onChange={() => setIsCompleted(!is_completed)} checked={isCompleted}
            />
            <span className="tooltiptext">Select compeleted</span>
        </div>
        <div className="task_title">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="addImportant">
       <div onClick={() => setIsImportant(!is_important)} className="important">
           { isImportant ? <BsStarFill color={`${COLORS.main}`} size={`${pxToRem(14)}`} /> : <BsStar color={`${COLORS.greyBLack}`} size={`${pxToRem(14)}`} />
           }
            <span className="tooltiptext">Select important</span>
       </div>

       <div className="delete">
       <RiDeleteBinLine
          onClick={props.handleClick}
          color={`${COLORS.greyBLack}`}
          size={`${pxToRem(14)}`}
        />
         <span className="tooltiptext">Delete task</span>
       </div>
      </div>
    </StyledTask>
  );
};

export default TaskItem;
