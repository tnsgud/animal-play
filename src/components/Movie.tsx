import { useQuery } from '@tanstack/react-query';
import { Poster, Title, Wrapper } from '../style';
import { useParams } from 'react-router-dom';
import { IMovieDetail, getMovie, makeImagePath } from '../api';
import styled from 'styled-components';

const CustomWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
`;
const CustomPoster = styled(Poster)`
  width: 300px;
  height: 500px;
  border-radius: 20px;
`;
const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomTitle = styled(Title)`
  font-size: 3rem;
`;
const Info = styled.span`
  font-size: 1.5rem;
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
`;

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
    <CustomWrapper>
      <CustomPoster src={makeImagePath(data.poster_path)} />
      <MovieInfoWrapper>
        <CustomTitle>{data.title}</CustomTitle>
        <Info>{data.tagline}</Info>
        <Info>Overview: {data.overview}</Info>
        <Info>Budget: ${(data.budget / 1000000).toFixed(1)} million</Info>
        <Info>Genres: {data.genres.map((g) => g.name).join(', ')}</Info>
        <Info>
          Homepage:{' '}
          <a href={data.homepage} target='_blank'>
            Link
          </a>
        </Info>

        <Info>Release Date: {data.release_date}</Info>
        <Info>Runtime: {data.runtime}</Info>
        <Info>
          Spoken Languages:{' '}
          {data.spoken_languages.map((l) => l.name).join(', ')}
        </Info>
        <Info>Status: {data.status}</Info>

        <Info>Vote Average: {data.vote_average}</Info>
      </MovieInfoWrapper>
    </CustomWrapper>
  );
}
