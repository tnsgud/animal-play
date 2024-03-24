import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, getNowPlaying, makeBgPath } from '../api';
import { PageWrapper, Backdrop } from '../style';

export default function NowPlaying() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['now-playing'],
    queryFn: getNowPlaying,
  });
  return (
    <PageWrapper>
      now playing
      {data?.results.map((m) => (
        <Backdrop key={m.id} src={makeBgPath(m.backdrop_path)} />
      ))}
    </PageWrapper>
  );
}
