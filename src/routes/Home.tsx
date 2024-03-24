import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, genreList, getPopular } from '../api';
import { PageWrapper } from '../style';
import GenreList from '../components/GenreList';

export default function Home() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['popular'],
    queryFn: getPopular,
  });

  const movie = genreList
    .map((g) => {
      const movies = data?.results.filter((m) => m.genre_ids.includes(g.id));
      if (!movies) return { ...g, movies: [] };

      return {
        ...g,
        movies,
      };
    })
    .filter((g) => g.movies.length);

  return (
    <PageWrapper>
      {movie.map((g) => (
        <GenreList
          key={`genre-list-${g.id}`}
          title={g.name}
          movies={g.movies}
        />
      ))}
    </PageWrapper>
  );
}
