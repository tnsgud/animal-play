import styled from 'styled-components';
import { IMovie, makeBgPath } from '../api';
import { Link } from 'react-router-dom';
import { Backdrop } from '../style';

interface Props {
  title: string;
  movies: IMovie[];
}

const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
const GenreTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
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
      <GenreTitle>{title}</GenreTitle>
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
