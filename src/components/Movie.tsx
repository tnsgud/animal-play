import { Wrapper } from '../style';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const { id } = useParams<{ id: string }>();

  return <Wrapper>hello movie {id}</Wrapper>;
}
