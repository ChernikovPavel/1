import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root'
import HomePage from './pages/HomePage';
import axiosInstance, { setAccessToken } from './misc/axiosInstance';

function App() {

  const [user, setUser] = useState({});
  
  useEffect(() => {


    (async () => {
      await axiosInstance
        .get('/api/token/refresh')
        .then((res) => {
          setUser((prev) => {
            return res.data.user;
          });
          setAccessToken(res.data.accessToken);
  
        })
        .catch('ОШИБКА В useEffect - ТОКЕН');
    })();
  }, []);

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage/>,
        },
        // {
        //   path: '/auth/reg',
        //   element: <RegPage setUser={setUser} />,
        // },
        // {
        //   path: '/auth/log',
        //   element: <LogPage setUser={setUser} />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
