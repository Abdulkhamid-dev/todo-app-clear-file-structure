import React, { useRef } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";
import './index.css'

function AddTask() {
    const inputRef = useRef();
    const toggleInput = () => {
      inputRef.current.focus();
    };
    return (
        <div className='addTask' onClick={toggleInput}>
        <div>
            <button className='plus_btn'>
            <AiOutlinePlus color={`${COLORS.greydark}`} size={`${pxToRem(16)}`}/>
            </button>
            <form action="">
            <input type="text" ref={inputRef}  placeholder='Add Task'/>
            <button>Create</button>
            </form>
        </div>
    </div>
    )
}

export default AddTask
