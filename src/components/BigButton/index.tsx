import { convertToRGB } from '@/utils/colors';
import React from 'react'
import styled from 'styled-components'

const transition = `0.3s ease-out all`;

const Button = styled("div")`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  & a {
    width: 240px;
    max-width: 240px;
    height: 54px;
    padding: 8px;
    font-size: 0.8rem;
    font-weight: 900;
    color: ${({theme}) => theme.palette.primary.dark};
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 0 0 1px inset rgba(${({theme}) => convertToRGB(theme.palette.basics.white)}, 0.3);
    position: relative;
    margin: 10px 0;
    &:after,&:before {
      content: "";
      width: 1px;
      position: absolute;
      height: 8px;
      background: ${({theme}) => theme.palette.background.main};
      left: 0;
      top: 50%;
      transform: translateY(50%);
    }
    &:before {
      right: 0;
      left: initial;
    }
    & p {
      margin: 0;
      height: 54px;
      line-height: 54px;
      box-sizing: border-box;
      z-index: 1;
      left: 0;
      width: 100%;
      position: relative;
      overflow: hidden;
      & span.base {
        box-sizing: border-box;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        border: 1px solid ${({theme}) => theme.palette.primary.dark};
        &:before {
          content: "";
          width: 2px;
          height: 2px;
          left: -1px;
          top: -1px;
          background: ${({theme}) => theme.palette.background.main};
          position: absolute;
          transition: ${transition};
        }
      }
      & span.bg {
        left: -5%;
        position: absolute;
        background: ${({theme}) => theme.palette.primary.dark};
        width: 0;
        height: 100%;
        z-index: 3;
        transition: ${transition};
        transform: skewX(-10deg)
      }
      & span.text {
        z-index: 4;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        &:after {
          content: "";
          width: 4px;
          height: 4px;
          right: 0;
          bottom: 0;
          background: ${({theme}) => theme.palette.background.main};
          position: absolute;
          transition: ${transition};
          z-index: 5;
        }
      }
    }
    &:hover {
      color: ${({theme}) => theme.palette.basics.white};
      & span.bg {
        width: 110%;
      }
      & span.text:after {
        background: ${({theme}) => theme.palette.basics.white};
      }
    }
  }
`

const BigButton = () => {
  return (
    <Button>
      <a href="#">
        <p>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">Texte</span>
        </p>
      </a>
    </Button>
  )
}

export default BigButton