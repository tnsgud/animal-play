import { Outlet } from 'react-router-dom';
import { Wrapper } from './style';
import Header from './components/Header';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
