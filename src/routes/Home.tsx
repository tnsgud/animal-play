import { useQuery } from '@tanstack/react-query';
import {
  IAPIResponse,
  genreList,
  getMoviesSeparatedByGenre,
  getOrdinal,
  getPopular,
  makeBgPath,
} from '../api';
import { PageWrapper, Title } from '../style';
import GenreList from '../components/GenreList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const TopMovieTitle = styled(Title)`
  font-size: 2rem;
`;
const TopMovies = styled.div`
  display: flex;
  gap: 3rem;
  padding: 0px 10px;

  & > a {
    flex: 1;
  }
`;
const TopMovieImg = styled.div<{ $backImg: string }>`
  height: 400px;
  border-radius: 25px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backImg});
  background-size: cover;
  background-position: center;
  padding: 10px 10px;
  font-size: 2rem;
  font-weight: bold;
`;

export default function Home() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['popular'],
    queryFn: getPopular,
  });

  if (!data) {
    return <PageWrapper>Loading...</PageWrapper>;
  }

  const popularMovies = [...data.results]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 5);

  const movies = getMoviesSeparatedByGenre(data.results);

  return (
    <PageWrapper>
      <TopMovieWrapper>
        <TopMovieTitle>Popular Movies</TopMovieTitle>
        <TopMovies>
          {popularMovies.map((m, i) => (
            <Link key={`top-movie-${i}`} to={`/movies/${m.id}`}>
              <TopMovieImg $backImg={makeBgPath(m.backdrop_path)}>
                {`${i + 1}${getOrdinal(i + 1)}`}
                <br /> {m.title}
              </TopMovieImg>
            </Link>
          ))}
        </TopMovies>
      </TopMovieWrapper>

      {movies.map((g) => (
        <GenreList
          key={`genre-list-${g.id}`}
          title={g.name}
          movies={g.movies}
        />
      ))}
    </PageWrapper>
  );
}
