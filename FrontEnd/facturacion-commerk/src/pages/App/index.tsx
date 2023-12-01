import { useRoutes, BrowserRouter } from 'react-router-dom' 
// import { Providers } from "../../redux/providers";
import { ReactNode } from 'react'
// import Navbar from '../../Components/Navbar'
import  Welcome from '../Welcome'
import  Home from '../Home'

type Props = {
  children?: ReactNode
}

const AppRoutes = () =>{
  let routes = useRoutes([
    { path:'/', element: <Welcome/> },
    // { path:'/login', element: <Login/> },
    // { path:'/sign-up', element: <Sing-up/> },
    { path:'/app', element: <Home/> },
    // { path:'/create-product', element: <CreateProduct/> },
    // { path:'/view-user', element: <ViewUser/> },
    // { path:'/view-product', element: <ViewProduct/> },
    // { path:'/sell', element: <Sell/> },
    // { path:'/generate-report', element: <GenerateReport/> },
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