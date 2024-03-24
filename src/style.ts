import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageWrapper = styled.div`
  flex: 1;
  background-color: transparent;
`;

export const Backdrop = styled.img`
  width: 300px;
  height: 150px;
  opacity: 0.4;
  border-radius: 10px;

  &:hover {
    opacity: 1;
    scale: 1.1;
  }
`;

export const Poster = styled.img`
  width: 150px;
  height: 200px;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
