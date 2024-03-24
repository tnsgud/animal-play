import { useQuery } from '@tanstack/react-query';
import {
  IAPIResponse,
  getComingSoon,
  getMoviesSeparatedByGenre,
  makeBgPath,
} from '../api';
import { PageWrapper } from '../style';
import GenreList from '../components/GenreList';

export default function ComingSoon() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['coming-soon'],
    queryFn: getComingSoon,
  });

  if (!data) {
    return <PageWrapper>Loading...</PageWrapper>;
  }

  const movies = getMoviesSeparatedByGenre(data.results);

  return (
    <PageWrapper>
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
