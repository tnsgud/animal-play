import styled from 'styled-components';
import { IMovie, makeBgPath } from '../api';
import { Link } from 'react-router-dom';
import { Backdrop, Title } from '../style';

interface Props {
  title: string;
  movies: IMovie[];
}

const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const GenreMovies = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  & > a {
    scroll-snap-align: start;
  }
`;

export default function GenreList({ title, movies }: Props) {
  return (
    <GenreWrapper>
      <Title>{title}</Title>
      <GenreMovies>
        {movies.map((m) => {
          return (
            <Link key={m.id} to={`/movies/${m.id}`}>
              <Backdrop src={makeBgPath(m.backdrop_path)} />
            </Link>
          );
        })}
      </GenreMovies>
    </GenreWrapper>
  );
}
