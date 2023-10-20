import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import ContextHome from './services/contextHome';

function App() {
  const browser = createBrowserRouter([
    {
      path:'/',
      element:<ContextHome><Home/></ContextHome>
    },
    {
      path:'/carrinho',
      element:<Carrinho/>
    }
  ])

  return (
    <RouterProvider router={browser}/>
  )
}

export default App
