import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

export const Poster = styled.img`
  width: 300px;
  height: 150px;
  opacity: 0.1;

  &:hover {
    opacity: 1;
    scale: 1.4;
  }

  transition: opacity scale 0.5s;
`;
