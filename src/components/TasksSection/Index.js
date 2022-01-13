import React from "react";
import AddTasks from "./AddTask";
import { StyledTaskSection } from "./Index.styles";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { RiLightbulbLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

function TasksSection() {
  return (
    <StyledTaskSection>
      <div id="main">
        <div className="title">
          <div className="taskBar">
            <div className="headline">
              <div>
                <div>
                  <h2>My Day</h2>
                  <div>
                    <BsThreeDots
                      color={`${COLORS.greydark}`}
                      size={`${pxToRem(20)}`}
                    />
                  </div>
                </div>
              </div>
              <div className="taskbarSubline">
                <span>
                  <span>wed, 12 january</span>
                </span>
              </div>
            </div>
            <div className="sortBy">
              <div>
                <div className="sortActions">
                  <div>
                    <button>
                      <div>
                        <BiSort
                          color={`${COLORS.greydark}`}
                          size={`${pxToRem(16)}`}
                        />
                        <span>Sort</span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="sortActions">
                  <div>
                    <button>
                      <div>
                        <RiLightbulbLine
                          color={`${COLORS.greydark}`}
                          size={`${pxToRem(16)}`}
                        />
                        <span>Menu</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <AddTasks/>
      </div>
    </StyledTaskSection>
  );
}

export default TasksSection;
