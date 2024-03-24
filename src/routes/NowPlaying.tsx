import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, getMoviesSeparatedByGenre, getNowPlaying } from '../api';
import { PageWrapper, Backdrop } from '../style';
import GenreList from '../components/GenreList';

export default function NowPlaying() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['now-playing'],
    queryFn: getNowPlaying,
  });

  if (!data) return <PageWrapper>Loading...</PageWrapper>;

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
