import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, getPopular, makeBgPath, makeImagePath } from '../api';
import { Wrapper, Poster } from '../style';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['popular'],
    queryFn: getPopular,
  });

  return (
    <Wrapper>
      {data?.results.map((m) => (
        <Link to={`/movies/${m.id}`}>
          <Poster src={makeBgPath(m.backdrop_path)} />
        </Link>
      ))}
    </Wrapper>
  );
}
