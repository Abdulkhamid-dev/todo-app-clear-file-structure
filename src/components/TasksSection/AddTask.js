import React, { useRef } from 'react'
import { StyledAddTaskForm } from "./Index.styles";
import { AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";
// import './index.css'

function AddTask() {
    const inputRef = useRef();
    const toggleInput = () => {
      inputRef.current.focus();
    };
    return (
        <StyledAddTaskForm className='addTask' onClick={toggleInput}>
        <div>
            <button className='plus_btn'>
            <AiOutlinePlus color={`${COLORS.greydark}`} size={`${pxToRem(16)}`}/>
            </button>
            <form action="">
            <input type="text" ref={inputRef}  placeholder='Add Task' required/>
            <button>Create</button>
            </form>
        </div>
    </StyledAddTaskForm>
    )
}

export default AddTask
