import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Movie from './components/Movie';
import ComingSoon from './routes/Coming-soon';
import NowPlaying from './routes/Now-playing';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/now-playing',
        element: <NowPlaying />,
      },
    ],
  },
  {
    path: '/movies/:id',
    element: <Movie />,
  },
]);
