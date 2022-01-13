import React from 'react'
import { BiStar } from "react-icons/bi";
import { StyledTask } from "./Index.styles";
import { COLORS } from '../../constants';
import { pxToRem } from '../../utils/index';

function TaskItem() {
    return (
        <StyledTask>
           <div>
           <div className='input_finished'>
                <input type="checkbox" value={1}  id="checkboxOneInput" />
                <label htmlFor="checkboxOneInput"></label>
            </div>
            <div className='task_title'>
               <h2>Read</h2>
            </div>
           </div>
           <div className='addImportant'>
           <BiStar  color={`${COLORS.greyBLack}`} size={`${pxToRem(14)}`}/>
           </div>
        </StyledTask>
    )
}

export default TaskItem
