import styled from "styled-components";
import { COLORS } from "../../constants/index";
import { pxToRem } from "../../utils/index";

export const StyledSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${COLORS.signingBg};
  .main {
    display: table-cell;
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    max-width: 440px;
    width: 100%;
    padding: 44px;
    background-color: ${COLORS.white};
    -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    min-width: 320px;
    min-height: 338px;
    overflow: hidden;
    .sign_header {
      img {
        width: ${pxToRem(150)};
        object-fit: cover;
        cursor: pointer;
      }
      h2 {
        font-size: ${pxToRem(20)};
        margin: 0;
      }
    }
  }
  .sign_body{
   div{
    margin-bottom: ${pxToRem(12)};
    border-bottom: ${pxToRem(1)} solid ${COLORS.black};
   }
  }
  input {
    width: 100%;
    height: ${pxToRem(36)};
    padding: ${pxToRem(12)};
    padding-left: 0;
    border: none;
    outline: none;
    &::placeholder {
      color: ${COLORS.iconGrey};
    }
  }
  button {
    width: 100%;
    height: ${pxToRem(36)};
    background-color: ${COLORS.blue};
    color: #fff;
    border: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: ${COLORS.main};
    }
  }
  .password_block {
      display: flex;
      align-items: center;
  }
`;
