import styled from 'styled-components';

import { secondaryColor, lightColor, darkColor } from '../../styles/colors';
import headerBackgroundImg from '../../assets/images/header-background.jpg';

export const Container = styled.div`
  height: 90vh;
  width: 94vw;
  background-image: url(${headerBackgroundImg});
  background-size: cover;

  margin: 3vh 3vw 0 3vw;
  border: 3px solid ${darkColor};
  border-radius: 20px 20px 0 0;

  padding: 14vh 7vw 7vh 7vw;

  h1 {
    font-size: 4rem;
    color: ${darkColor};

    text-shadow: 4px 4px 1px ${lightColor};
    line-height: 5rem;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-top: 5vh;

  h2 {
    font-size: 6.5rem;
    color: transparent;
    -webkit-text-stroke: 2px ${darkColor};
    padding-right: 1.5vw;
    margin-right: 2vw;

    text-shadow: 4px 4px 1px ${lightColor};
    border-right: 2px solid ${darkColor};
    box-shadow: 3px 0 0 ${lightColor};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      font-size: 1.2rem;
      color: ${darkColor};
    }
  
    div {
      display: flex;
      margin-top: 2vh;

      input, select {
        height: 2.4rem;
        background-color: transparent;
        border: 2px solid ${darkColor};
        border-radius: 10px 0 0 10px;
        box-shadow: 2px 2px 1px ${lightColor};

        padding-left: 0.7rem;
        padding-right: 0.7rem;
        color: ${darkColor};
        font-size: 0.9rem;
      }

      input[type=checkbox] {
        margin-right: 0.5rem;
        box-shadow: none;
      }

      span {
        align-self: center;
        margin-right: 0.5rem;
        width: 15vw;
      }

      button {
        height: 2.4rem;
        background-color: transparent;
        display: block;
        padding: 10px 20px;
    
        color: ${darkColor};
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        text-shadow: 2px 2px 1px ${lightColor};
    
        border: 2px solid ${darkColor};
        border-radius: 0 10px 10px 0;
        box-shadow: 2px 2px 1px ${lightColor};
    
        transition: box-shadow 0.5s, text-shadow 0.5s, padding-left 0.5s;
    
        &:hover {
          padding-left: 40px;
          box-shadow: 3px 3px 2px ${lightColor};
          text-shadow: 3px 3px 2px ${lightColor};
        }
      }
    }
  }
`;
