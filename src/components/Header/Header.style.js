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
