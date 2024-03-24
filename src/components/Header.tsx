import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 1.5rem 0;
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export default function Header() {
  const homeMatch = useMatch('/');
  const comingSoonMatch = useMatch('/coming-soon');
  const nowPlayingMatch = useMatch('/now-playing');

  return (
    <HeaderWrapper>
      <HeaderItem>
        {homeMatch ? '🔥' : ''}
        <Link to={'/'}>home</Link>
      </HeaderItem>
      <HeaderItem>
        {comingSoonMatch ? '🔥' : ''}
        <Link to={'/coming-soon'}>coming soon</Link>
      </HeaderItem>
      <HeaderItem>
        {nowPlayingMatch ? '🔥' : ''}
        <Link to={'/now-playing'}>now playing</Link>
      </HeaderItem>
    </HeaderWrapper>
  );
}
