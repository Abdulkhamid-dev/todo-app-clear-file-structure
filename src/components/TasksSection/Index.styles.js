import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants/index";
import { pxToRem } from "../../utils/index";

export const StyledTaskSection = styled.section`
  margin: 0 24px;
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
  .sidebarNavBtn {
      background-color: ${COLORS.white};
      display: none;
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
        background-color: ${COLORS.lightGrey};
    }
  }
   @media only screen and (max-width: 920px) {
     .sidebarNavBtn {
    display: flex;
  }
 }
  `;

export const StyledAddTaskForm = styled.div`
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid ${COLORS.asideBorder};
  .main {
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
  .fake_form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fake_form button {
    width: 65px;
    height: 25px;
    border: none;
    cursor: pointer;
    color: var(--icon-silver);
    font-size: 14px;
    background-color: white;
  }
  .fake_form button:hover {
    background-color: transparent;
  }
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    align-tems: center;
    justify-content: center;
    height: 100vh;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    z-index: 9999;
  }
  .modal-content {
    position: absolute;
    background-color: ${COLORS.lightGrey};
    margin: auto;
    padding: 10px;
    border: 1px solid #888;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: ${pxToRem(6)};
    .modal_header {
      color: ${COLORS.main};
      padding: 10px;
      position: relative;
      display: felx;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      border: none;
    }
  } 
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: ${COLORS.main};
    text-decoration: none;
    cursor: pointer;
  }
  .modal_body {
    display: block;
    padding-left: ${pxToRem(20)};
    padding-right: ${pxToRem(20)};
    label {
      color: ${COLORS.blue};
    }
    input[type="text"], input[type="date"]{
     border-bottom: 1px solid;
     margin-bottom: ${pxToRem(10)};
    }
  }
  .checkbox_block{
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;      
      input {
        width: ${pxToRem(15)};
       margin-left: ${pxToRem(5)};
      }
      label{
        font-size: ${pxToRem(14)};
      }
    }
  }
  .module_footer {
    margin-top: ${pxToRem(10)};
    display: flex;
    align-items: center;
    justify-content: center;
    button{
      width: ${pxToRem(135)};
      height: ${pxToRem(35)};
      color: ${COLORS.white};
      background-color: ${COLORS.blue};
      border-radius: ${pxToRem(6)};
      outline: none;
      border: none;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: ${COLORS.blueActive};
      }
    }
  }
  .select{
    display: flex;
    flex-direction: column;
    select{
      margin-top: ${pxToRem(10)};
      height: ${pxToRem(30)};
    }
  }
`;
export const StyledBgLine = styled.div`
  flex: 1;
  background: linear-gradient(
    180deg,
    white,
    white 52px,
    #e5e5e5 52px,
    #e5e5e5 52px
  );
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 #e5e5e5;
`;

export const StyledTasksList = styled.div`
  margin: 0 8px;
  width: 100%;
`;
export const StyledTask = styled.div`
  min-height: 52px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 8px;
  box-shadow: 0 17px 0 -16px #e5e5e5;
  flex-wrap: wrap;
  div {
    display: flex;
    align-items: center;
  }
  .input_finished {
    width: 12px;
    height: 12px;
    background: ${COLORS.white};
    border: 1px solid ${COLORS.blueActive};
    position: relative;
    border-radius: 50%;
    // input {}
    }
  }
  h2 {
    font-size: ${pxToRem(16)};
    margin-left: 10px;
    color: ${COLORS.greyBLack};
    font-weight: 500;
  }
  .addImportant {
    padding-right: 15px;
  }
`;
