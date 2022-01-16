import styled from "styled-components";
import { COLORS } from "../../constants/index";
import { pxToRem } from "../../utils/index";

export const StyledStarted = styled.div`
  flex: 1 1 auto;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  display: flex;
  max-height: 100vh;
  div {
    justify-content: center;
    flex-direction: column;
    min-width: ${pxToRem(450)};
    display: flex;
    align-items: center;
    .header_content {
      padding: 33px 0 20px 0;
      justify-content: center;
      flex-direction: column;
      display: flex;
      align-items: center;
      .check_img {
        height: ${pxToRem(79)};
      }
      h1 {
        font-size: ${pxToRem(42)};
        font-weight: 100;
        margin-top: ${pxToRem(20)};
        color: ${COLORS.greyBLack};
      }
      .people_img {
        height: ${pxToRem(183)};
        padding-top: ${pxToRem(37)};
        margin-bottom: -${pxToRem(16)};
      }
    }
  }
  .main_content{
    padding: 20px 0;
    justify-content: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    button{
        margin-bottom: ${pxToRem(16)};
        padding: 14px 45px;
        background: ${COLORS.main};
        color: ${COLORS.white};
        font-weight: 700;
        font-size: ${pxToRem(16)};
        border-radius: 2px;
        box-shadow: 0px 2px 4px -0.7px rgb(0 0 0 / 25%);
        cursor: pointer;
        outline: none;
        border: none;
        transition: 0.2s ease-in-out;
        &:hover{
            background-color: ${COLORS.darkBlue};
        }
    }
    p{
        margin: ${pxToRem(5)};
        a{
            font-size: ${pxToRem(16)};
            color: ${COLORS.main};
        }
    }
    }
  }
  .footer_content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-bottom: 24px;
        flex-direction: column;
        min-width: 300px;
        flex-shrink: 0;
        font-size: ${pxToRem(16)};
        span {
            h3{
                margin: 0;
            }
        }
        .operation_icons{
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-top: ${pxToRem(16)};
            a{
                margin: ${pxToRem(4)};
                height: ${pxToRem(30)};
                width: ${pxToRem(46)};
                border: 1px solid ${COLORS.darkGrey};
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 2px;
                transition: 0.2s ease-in-out;
                &:hover {
                    background-color: ${COLORS.lightGrey};
                }
            }
        }
    }
  }
`;
