import React from "react";
import AddTasks from "./AddTask";
import BgLines from "./BgLines";
import Tasks from "./TasksList";
import { StyledTaskSection } from "./Index.styles";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
import { RiLightbulbLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { COLORS } from "../../constants";
import { pxToRem } from "../../utils";

function TasksSection(props) {

console.log(props);

  return (
    <StyledTaskSection>
      <div id="main">
        <div className="title">
          <div className="taskBar">
            <div className="headline">
              <div>
                <div>
                  <button className="sidebarNavBtn">
                    <i>
                      <VscMenu
                        color={`${COLORS.darkGrey}`}
                        size={`${pxToRem(20)}`}
                      />
                    </i>
                  </button>

                  <h2>{props.category}</h2>
                  <div>
                    <BsThreeDots
                      color={`${COLORS.greydark}`}
                      size={`${pxToRem(20)}`}
                    />
                  </div>
                </div>
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
        <AddTasks />
        <Tasks filteredData={props.data} />
        <BgLines />
      </div>
    </StyledTaskSection>
  );
}

export default TasksSection;
