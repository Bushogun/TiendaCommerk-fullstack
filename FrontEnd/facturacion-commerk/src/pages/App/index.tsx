import { useRoutes, BrowserRouter } from 'react-router-dom' 
// import { Providers } from "../../redux/providers";
import { ReactNode } from 'react'
// import Navbar from '../../Components/Navbar'
// import  Home from '../Home'
// import Alcoholic from '../Alcoholic';
// import NonAlcoholic from '../Non-Alcoholic';

type Props = {
  children?: ReactNode
}

const AppRoutes = () =>{
  let routes = useRoutes([
    // { path:'/', element: <Home/> },
    // { path:'/alcoholic', element: <Alcoholic/> },
    // { path:'/non-alcoholic', element: <NonAlcoholic/> },

    
  ])
  return routes
}

const App = (props: Props) => {

  return (
    <div className='flex flex-col items-center mt-20'>
      <BrowserRouter>
        {/* <Providers> */}
        {/* <Navbar /> */}
        <AppRoutes/>
          {props.children}
        {/* </Providers> */}
      </BrowserRouter>
    </div>
  )
}

export default App