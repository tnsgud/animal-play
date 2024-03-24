import { useQuery } from '@tanstack/react-query';
import { Poster, Wrapper } from '../style';
import { useParams } from 'react-router-dom';
import { IMovieDetail, getMovie, makeImagePath } from '../api';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

// budget : 예산 (달러)

export default function Movie() {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery<IMovieDetail>({
    queryKey: [`movie-${id}`],
    queryFn: () => getMovie(id ?? ''),
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Poster src={makeImagePath(data.poster_path)} />
      <Title>{data.title}</Title>
      {JSON.stringify(data.genre_ids)}
      {/* <img src={makeImagePath(data.bengs_to_collection.poster_path)} /> */}
    </Wrapper>
  );
}
