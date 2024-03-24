import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, getComingSoon, makeBgPath } from '../api';
import { Backdrop } from '../style';

export default function ComingSoon() {
  const { data } = useQuery<IAPIResponse>({
    queryKey: ['coming-soon'],
    queryFn: getComingSoon,
  });

  return (
    <div>
      coming soon
      {data?.results.map((m) => (
        <Backdrop key={m.id} src={makeBgPath(m.backdrop_path)} />
      ))}
    </div>
  );
}
