import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants/index";
import { pxToRem  } from "../../utils/index";

export const StyledTaskSection = styled.section`
  flex: 1 1 0px;
  display: flex;
  overflow: hidden;
  #main {
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: ${COLORS.white};
    transition: background-color 0.3s;
    .title {
      height: ${STYLING_CONFIGS.TASKS_HEADER_HEIGHT};
      display: block;
      padding: 12px 16px 0 16px;
      position: relative;
      align-items: center;
      flex-shrink: 0;
      .taskBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 48px;
        .headline {
          margin-top: 16px;
          min-width: 100px;
          flex: 1 1 0px;
          margin-right: 20px;
          div {
            align-items: center;
            display: flex;
            div{
                min-width: 20px;
                h2{
                    color: ${COLORS.sidebarItem};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: ${pxToRem(20)};
                    font-weight: 600;
                    padding: 6px 8px;
                }
            }
        }
          }
        }
      }
    }
  }
`;
