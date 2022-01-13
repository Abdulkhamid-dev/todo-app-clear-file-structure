import React from 'react';
import { StyledTasksList } from './Index.styles';
import TaskItem from './TaskItem'

const Tasks = () => {
    return (
        <StyledTasksList>
           <TaskItem/>
        </StyledTasksList>
    );
}

export default Tasks;