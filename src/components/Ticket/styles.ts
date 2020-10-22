import styled from 'styled-components';

import { secondaryColor, lightColor, darkColor } from '../../styles/colors';
import headerBackgroundImg from '../../assets/images/header-background.jpg';

export const Container = styled.div`
  min-height: 90vh;
  height: 100%;
  width: 94vw;
  background-image: url(${headerBackgroundImg});
  background-size: cover;

  margin: 3vh 3vw 5vh 3vw;
  padding: 14vh 7vw 7vh 7vw;
  border: 3px solid ${darkColor};
  border-radius: 20px 20px 0 0;
  box-shadow: 5px 5px 2px ${lightColor};

  h1 {
    font-size: 4rem;
    color: ${darkColor};

    text-shadow: 4px 4px 1px ${lightColor};
  }

  button {
    margin-top: 1rem;
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

  & > div {
    display: flex;
    
    & > span {
      align-self: center;
      font-size: 5rem;
      color: transparent;
      -webkit-text-stroke: 2px ${darkColor};
      text-shadow: 3px 3px 1px ${lightColor};
      margin: 0 1rem;
    }
  }

  p {
    font-size: 1rem;
  }

  h5 {
    font-size: 2rem;
    font-size: 700;
    margin-bottom: 1rem;
  }

  & > span {
    display: inline-block;
    width: 20vw;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    & > div {
      flex-direction: column;    
      & > span {
        align-self: flex-start;
      }
    }
    & > span {
      width: 50vw;
    }
  }
`;

export const TicketContainer = styled.div`
  width: 25vw;
  margin: 3vh 0 3vh;
  padding: 3vh 3vw;

  border: 2px solid ${darkColor};
  border-radius: 15px;
  background-color: ${secondaryColor};
  box-shadow: 5px 5px 1px ${lightColor};

  display: flex;
  flex-direction: column;

  img {
    width: 4vw;
    align-self: flex-end;
  }

  & > div {
    display: flex;
    align-items: center;
    margin: 1rem 0 2rem;
    
    div {
      position: relative;
      padding-right: 1vw;
      margin-right: 1vw;
      border-right: 2px solid ${darkColor};
      box-shadow: 2px 0 0 ${lightColor};

      h3 {
        font-size: 3rem;
        color: transparent;
        -webkit-text-stroke: 2px ${darkColor};
        text-shadow: 3px 3px 1px ${lightColor};
      }

      span {
        position: absolute;
        bottom: -3px;
        right: 10px;
      }
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  span {
    font-size: 0.75rem;
  }

  h4 {
    font-size: 1.3rem;
    font-size: 700;
  }

  @media (max-width: 768px) {
    width: 50vw;
  }
`;
