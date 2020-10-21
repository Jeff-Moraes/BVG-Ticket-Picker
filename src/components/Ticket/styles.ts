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
