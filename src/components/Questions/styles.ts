import styled from 'styled-components';

import { secondaryColor, lightColor, darkColor } from '../../styles/colors';
import headerBackgroundImg from '../../assets/images/header-background.jpg';

export const QuestionsContainer = styled.div`
  height: 90vh;
  width: 94vw;
  background-image: url(${headerBackgroundImg});
  background-size: cover;

  margin: 3vh 3vw 0 3vw;
  border: 3px solid ${darkColor};
  border-radius: 20px 20px 0 0;

  padding: 14vh 7vw 7vh 7vw;

  h1 {
    font-size: 5.2rem;
    color: ${darkColor};

    text-shadow: 4px 4px 1px ${lightColor};
    line-height: 5rem;
  }

  h2 {
    font-size: 1.7rem;
    color: ${darkColor};

    text-shadow: 2px 2px 1px ${lightColor};
    line-height: 2.5rem;
    padding-top: 2rem;
    width: 40vw;
  }

  button {
    background-color: ${secondaryColor};
    display: block;
    margin-top: 2rem;
    padding: 10px 20px;

    color: ${darkColor};
    font-weight: 600;
    text-decoration: none;
    text-shadow: 2px 2px 1px ${lightColor};

    border: 2px solid ${darkColor};
    border-radius: 10px;
    box-shadow: 2px 2px 1px ${lightColor};

    transition: box-shadow 0.5s, text-shadow 0.5s, padding-left 0.5s;

    &:hover {
      padding-left: 40px;
      box-shadow: 3px 3px 2px ${lightColor};
      text-shadow: 3px 3px 2px ${lightColor};
    }
  }
`;
