import styled from "styled-components";
import { COLORS, STYLING_CONFIGS } from "../../constants";
import { pxToRem } from "../../utils";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${COLORS.main};
  height: ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)};
  display: flex;
  align-items: center;
  color: ${COLORS.white};
  justify-content: space-between;
  font-family: san-serif;

  .navbar, .menu, .navIcon, .searchBLock {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navbar {
    h3 {
      a{
        color: ${COLORS.white};
      }
    }
  }
  .navIcon {
    height: ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)};
    width: ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)};
    color: ${COLORS.white};
    background-color: ${COLORS.main};
    transition: 0.2s ease-in-out;
    a{
      color: ${COLORS.white};
    }
    &:hover {
      background-color: ${COLORS.hoverBlue};
    }
  }
  .searchBLock {
  max-width: ${pxToRem(400)};
  height: ${pxToRem(16)};
  width: 100%;
  padding: ${pxToRem(8)};
  margin: 0;
  background-color: ${COLORS.lightBlue};
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${COLORS.white};
  }
  &:focus-within {
    background-color: ${COLORS.white};
  }
  form {
    width: 100%;
  }
  input{
    outline: none;
    border: none;
    width: 100%;
    color: ${COLORS.darkGrey};
    background-color: transparent;
  }
  }
  .dropbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: white;
    font-size: ${pxToRem(18)};
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    border: 1px solid ${COLORS.white};
    border-radius: 50%;
    cursor: pointer;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    transform: translate(-122px, 12px);
   div{
  padding: 8px 16px;
  color: ${COLORS.sidebarItem};
  font-family: sans-serif;
    h5{
      color: ${COLORS.sidebarItem};
      font-size: ${pxToRem(18)};
      font-weight: 600;
      padding: 0;
      margin: 0px;
    }
    p{
      padding: 0;
      margin: 0px;
      font-size: ${pxToRem(14)};
      margin-bottom: ${pxToRem(4)};
    }
   }
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .dropdown-content a:hover {background-color: #f1f1f1}
  
  .account:hover .dropdown-content {
    display: block;
  }
  

  @media only screen and (max-width: 760px) {
    .searchBLock {
      max-width: 270px !important;
    }
    .menu div {
      display: none;
    }
    .menu div:last-child {
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
  }
  .notification {
    position: relative;
  }
  .notificationCount {
    background-color: ${COLORS.darkBlue};
    color: ${COLORS.white};
    font-size: ${pxToRem(11)};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${pxToRem(16)}; 
    height: ${pxToRem(16)};
    border-radius: 50%;
    position: absolute;
    top: ${pxToRem(3)};
    right: ${pxToRem(5)};
  }
`;
