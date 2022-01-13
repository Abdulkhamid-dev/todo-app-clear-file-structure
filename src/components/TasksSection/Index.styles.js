import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants/index";
import { pxToRem } from "../../utils/index";

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
  .taskbarSubline {
    font-size: ${pxToRem(14)};
    padding: 0 8px;
    font-weight: 200;
    span{
        display: inline-block;
        font-family: sans-serif;
        color: ${COLORS.darkGrey};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: ${pxToRem(12)};
    }
  }
  .sortBy {
      display: flex;
      div{
        display: flex;
        align-items: center;
        flex: 1 1 auto;
        align-self: flex-end;
        .sortActions {
            align-self: flex-start;
            flex-shrink: 0;
            box-shadow: none;
            color: ${COLORS.white};
            cursor: pointer;
            position: relative;
            div {
                display: inline;
                button{
                    padding: 2px 12px;
                    margin-left: 2px;
                    font-family: sans-serif;
                    position: relative;
                    cursor: pointer;
                    color: ${COLORS.sidebarItem};
                    font-size: ${pxToRem(14)};
                    line-height: ${pxToRem(14)};
                    padding: 9px 12px;
                    border: none;
                    width: auto;
                    height: auto;
                    border-radius: 2px;
                    border: none;
                    outline: none;
                    background-color: transparent;
                    div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size: ${pxToRem(14)};
                    }
                }
            }
        }
      }
  }
  `;

  export const StyledAddTaskForm = styled.div`
    cursor: pointer;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    margin: 0 8px;
    border-radius: 4px;
    border: 1px solid ${COLORS.asideBorder};
  div {
    box-shadow: 0 17px 0 -16px #e5e5e5;
    background-color: #f5f5f5;
    padding: 0 0.8rem !important;
    margin: 0px !important;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .plus_btn {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 32px;
    height: 32px;
    padding: 4px;
    flex-shrink: 0;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
 input {
    outline: none;
    border: none;
    width: 100%;
    height: 35px;
    background-color: transparent;
    padding: 5px;
    font-size: 18px;
    color: var(--icon-silver);
  }
 form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
 form button {
    width: 65px;
    height: 25px;
    border: none;
    cursor: pointer;
    color: var(--icon-silver);
    font-size: 14px;
    background-color: white;
  }
   form button:hover {
    background-color: transparent;
  }
  `