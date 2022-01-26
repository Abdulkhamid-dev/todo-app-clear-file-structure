import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants";
import { pxToRem } from "../../utils";

export const StyledSidebar = styled.aside`
@media only screen and (max-width: 920px) {
  position: absolute;
  flex-column: column;
  height: 100%;
  left: -290px;
 }
  border-right: 1px solid #eaeaea;
  width: 290px;
  background-color: ${COLORS.lightGrey};
  z-index: 60;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  height: 100%;
  transition: 0.4s ease-in-out;

  .sidebar {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }
  .sidebarHeader {
    display: flex;
    align-items: center;
    height: ${STYLING_CONFIGS.HEADER_HEIGHT};
    margin-top: 12px;
    padding: 0 8px;
  }
  .sidebarNavBtn {
    button {
      background-color: ${COLORS.lightGrey};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 6px;
      width: 32px;
      height: 32px;
      transition: background-color 0.1s;
      outline: none;
      border: none;
      &:hover {
        background-color: ${COLORS.white};
      }
    }
  }
  .sidebarContent {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    padding-top: 1px;
    nav {
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
      ul {
        padding-top: 8px;
        padding: 0;
        .menu-list-item{
          transition: 0.5s ease-in-out;
        }
        .menu-list-item:hover{
          li{
            background-color: ${COLORS.activeGrey} !important; 
            .itemTitle {
              color: ${COLORS.main};
            }  
            .taskCount {
              color: ${COLORS.main};
            }
          }
        }
        a.active{
          li{
            background-color: ${COLORS.activeGrey} !important; 
            .itemTitle {
              color: ${COLORS.main};
            }  
            .taskCount {
              color: ${COLORS.main};
            }
          }
        }
        li {
          min-width: 50px;
          min-height: ${pxToRem(36)};
          position: relative;
          background-color: transparent;
          div {
            cursor: pointer;
            box-sizing: border-box;
            min-height: ${pxToRem(36)};
            height: ${pxToRem(36)};
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            align-items: center;
            padding: 0 12px;
            background: inherit;
            .itemTitle {
              font-family: sans-serif;
              color: ${COLORS.sidebarItem};
              font-size: ${pxToRem(15.5)};
              font-weight: 400;
              margin: 0 8px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .taskCount {
              color: ${COLORS.sidebarItem};
              font-size: ${pxToRem(15)};
              padding: 0 4px;
              margin-left: auto;
              font-weight: 100;
              font-family: sans-serif;
            }
          }
        }
      }
    }
  }

  .sidebarAddList {
    flex-shrink: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    .addInput {
      color: ${COLORS.blueActive};
      height: 36px;
      font-size: ${pxToRem(14)};
      padding: 0 8px;
      min-height: ${pxToRem(36)};
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: ${COLORS.white};
      }
      .plusBtn {
        width: 32px;
        height: 32px;
        padding: 4px;
        flex-shrink: 0;
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
      }
      input {
        border: none !important;
        outline: none;
        background: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        font-size: ${pxToRem(15)};
        transition: none;
        color: ${COLORS.greyBLack};
      }
    }
  }
  .addGroup {
    display: flex;
    align-items: center;
    min-height: ${pxToRem(36)};
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: ${COLORS.white};
    }
    button {
      cursor: pointer;
      box-sizing: border-box;
      min-height: ${pxToRem(36)};
      height: ${pxToRem(36)};
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      display: flex;
      align-items: center;
      padding: 0 12px;
      border: none;
      outline: none;
      background: transparent;
    }
  }

  .sidebarFooter {
    border-top: 1px solid ${COLORS.asideBorder};
    div {
      align-items: center;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      a {
        padding: 12px 0;
        height: 48px;
        flex: 1 1 0px;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        cursor: pointer;
        text-align: center;
        transition: 0.2s ease-in-out;
        &:hover {
          background-color: ${COLORS.activeGrey};
        }
      }
    }
  }
`;


