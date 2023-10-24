import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import ContextHome from './services/contextHome';
import ContextCarrinho from './services/contextCarrinho';
import ContextGlobal from './services/contextGlobal';

function App() {
  const browser = createBrowserRouter([
    {
      path:'/',
      element:<ContextHome><Home/></ContextHome>
    },
    {
      path:'/carrinho',
      element:<ContextCarrinho><Carrinho/></ContextCarrinho>
    }
  ])

  return (
    <ContextGlobal><RouterProvider router={browser}/></ContextGlobal>
  )
}

export default App
