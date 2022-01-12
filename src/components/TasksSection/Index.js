import React from 'react'
import {StyledTaskSection} from './Index.styles'
import {BsThreeDots} from 'react-icons/bs'
import { COLORS } from '../../constants'
import { pxToRem } from '../../utils'

function TasksSection() {
    return (
        <StyledTaskSection>
            <div id="main">
                <div className="title">
                    <div className="taskBar">
                        <div className="headline">
                            <div>
                                <div>
                                    <h2>
                                        My Day
                                    </h2>
                                   <div>
                                       <BsThreeDots color={`${COLORS.greydark}`} size={`${pxToRem(20)}`}/>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledTaskSection>
    )
}

export default TasksSection