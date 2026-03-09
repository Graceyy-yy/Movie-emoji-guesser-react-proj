import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; 
import App from './App.tsx'
import Root from './Root.tsx';
import { Guesser } from './components/Guesser.tsx';
import { UserProvider } from './context/UserContext.tsx';
import { MovieList } from './components/MovieList.tsx';


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {index: true, element: <App/>}
    ,{path:'Guesser', element:<Guesser/>}
    ,{path:'MovieList', element:<MovieList/>}


   

    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
  <RouterProvider router={router}/>
  </UserProvider>
  </StrictMode>
)
