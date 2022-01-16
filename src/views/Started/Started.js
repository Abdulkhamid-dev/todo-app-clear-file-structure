import React from 'react';
import { Link } from 'react-router-dom';
import { GrAndroid, GrWindows, GrApple } from 'react-icons/gr';
import { StyledStarted } from './Started.style';
import checkLogo from '../../asstes/img/check.png'
import peopleStarted from '../../asstes/img/started_people.png'
import { COLORS } from '../../constants/index';
import { pxToRem } from '../../utils/index';

function Started() {
    return (
        <StyledStarted>
            <div>
                <div className="header_content">
                    <img className='check_img' src={checkLogo} alt="microsooft check" />
                    <h1>Microsoft To Do</h1>
                    <img className='people_img' src={peopleStarted} alt="People" />
                </div>
                <div className="main_content">
                    {/* <Link to="/sign-in"> */}
                    <button>Get started</button>
                    {/* </Link> */}
                    <p>
                        <a href='#!'>Learn more</a>
                    </p>
                </div>
                <div className="footer_content">
                    <p>
                        <span><h3>Download</h3></span>
                        <span className="operation_icons">
                            <a href="#!">
                                <GrAndroid color={`${COLORS.fillIcons}`} size={`${pxToRem(20)}`}/>
                            </a>
                            <a href="#!">
                                <GrWindows color={`${COLORS.fillIcons}`} size={`${pxToRem(20)}`}/>
                            </a>
                            <a href="#!">
                                <GrApple color={`${COLORS.fillIcons}`} size={`${pxToRem(20)}`}/>
                            </a>
                        </span>
                    </p>

                </div>
            </div>
        </StyledStarted>
    )
}

export default Started
