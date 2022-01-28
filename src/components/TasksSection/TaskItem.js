import React, { useContext, useState, useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { StyledTask } from "./Index.styles";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils/index";
import axios from "../../utils/axios";
import MainContext from "../../context/Context";

const TaskItem = (props) => {
  console.log(props);
  // const {
  //   id,
  //   is_important,
  //   is_completed,
  // } = props.data;
  // const [isImportant, setIsImportant] = useState(is_important);
  // const [isCompleted, setIsCompleted] = useState(is_completed);

  // useEffect(() => {
  //   if (isImportant !== is_important) {
  //     handleImportant();
  //   }
  // }, [isImportant]);

  // useEffect(() => {
  //   if (isCompleted !== is_completed) {
  //     handleCompleted();
  //   }
  // }, [isCompleted]);

  // const handleCompleted = async () => {
  //   try {
  //     const { data } = await axios.put(`/todos/${id}`, {
  //       data: { is_completed: !is_completed },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleImportant = async () => {
  //   try {
  //     const { data } = await axios.put(`/todos/${id}`, {
  //       data: { is_important: !is_important },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setCheck(!check);
  };

  return (
    <StyledTask>
      <div>
        <div className="input_finished">
            <input
              type="checkbox"
              onChange={handleChange}
             checked={props.compeleted}
            />
        </div>
        <div className="task_title">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="addImportant">
       <span>
           { props.important ? <BsStarFill color={`${COLORS.main}`} size={`${pxToRem(14)}`} /> : <BsStar color={`${COLORS.greyBLack}`} size={`${pxToRem(14)}`} />
           }
       </span>

        <RiDeleteBinLine
          onClick={props.handleClick}
          color={`${COLORS.greyBLack}`}
          size={`${pxToRem(14)}`}
        />
      </div>
    </StyledTask>
  );
};

export default TaskItem;
