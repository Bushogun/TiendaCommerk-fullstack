import { useRoutes, BrowserRouter } from 'react-router-dom'
import styles from '../App/app.module.css'
// import { Providers } from "../../redux/providers";
import { ReactNode } from 'react'
import Navbar from '../../components/navbar'
import  Welcome from '../Welcome'
import  Login from '../LogIn'
import  SignUp from '../SignUp'
import  Home from '../Home'

type Props = {
  children?: ReactNode
}

const AppRoutes = () =>{
  let routes = useRoutes([
    { path:'/', element: <Welcome/> },
    { path:'/login', element: <Login/> },
    { path:'/sign-up', element: <SignUp/> },
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
    <div className={styles["container"]}>
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