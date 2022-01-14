import React from 'react'
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { StyledTask } from "./Index.styles";
import { COLORS } from '../../constants';
import { pxToRem } from '../../utils/index';
import axios from '../../utils/axios';

function TaskItem(props) {
    const handleDeleteTodo = async (id) => {
        try {
            const {data} = axios.delete(`/todos/${id}`)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <StyledTask>
           <div>
           <div className='input_finished'>
                <input type="checkbox" value={1}  id="checkboxOneInput" />
                <label htmlFor="checkboxOneInput"></label>
            </div>
            <div className='task_title'>
               <h2>{props.title}</h2>
            </div>
           </div>
           <div className='addImportant'>

           < BiStar  color={`${COLORS.greyBLack}`} size={`${pxToRem(14)}`}/>

           < RiDeleteBinLine onClick={() =>  handleDeleteTodo(5)}  color={`${COLORS.greyBLack}`} size={`${pxToRem(14)}`}/>

           </div>
        </StyledTask>
    )
}

export default TaskItem
