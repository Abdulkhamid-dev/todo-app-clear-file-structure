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
  .container {
    position: relative;
    flex: 1 1 0px;
    display: flex;
   div {
    flex-direction: column;
    display: flex;
    flex: 1;
    overflow: hidden;
    .mainBg {
        overflow: hidden;
        position: relative;
        background: ${COLORS.white};
        display: flex;
        flex-direction: column;
        flex: 1 1 0px;
        .addToDo{
            div{
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                margin: 0 8px;
                border-radius: 4px;
                border: 1px solid ${COLORS.activeGrey};
                div{
                    box-shadow: 0 17px 0 -16px #e5e5e5;
                    padding: 0 8px;
                    background-color: #f5f5f5;
                    padding: 0 0.8rem !important;
                     margin: 0px !important;
                   display: flex;
                    align-items: center;
                }
            }
            .addBtn {
                margin-top: 8px;
                margin-bottom: 8px;
                width: 32px;
    height: 32px;
    padding: 4px;
    flex-shrink: 0;
    cursor: pointer;
    border: none;
    outline: none;
            }
        }
        .bgLines{
            margin: 0 24px;
    flex: 1;
    background: linear-gradient(
180deg
, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);
    background-size: 100% 53px;
    box-shadow: inset 0 1px 0 0 #e5e5e5;
        }
    }
   }
  }
  .addInput {
    margin-top: 8px;
    margin-bottom: 8px;
    height: 40px;
    border-radius: 2px !important;
    background-color: ${COLORS.darkfff};
    padding: 16px 12px;
    font-size: ${pxToRem(14)};
    transition: none;
    color: ${COLORS.greyBLack};
  }
`;
