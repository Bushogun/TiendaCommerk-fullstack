import { useRoutes, BrowserRouter } from 'react-router-dom'
import styles from '../App/app.module.css'
import { ReactNode } from 'react'
import { Providers } from "../../redux/providers";

import  Welcome from '../Welcome'
import  Login from '../LogIn'
import  SignUp from '../SignUp'
import  Home from '../Home'
import  ViewProducts from '../ViewProducts'
import CreateProduct from '../CreateProduct'
import GenerateSell from '../Sell'
import GenerateReport from '../GenerateReport'

type Props = {
  children?: ReactNode
}

const AppRoutes = () =>{
  let routes = useRoutes([
    { path:'/', element: <Welcome/> },
    { path:'/login', element: <Login/> },
    { path:'/sign-up', element: <SignUp/> },
    { path:'/app', element: <Home/> },
    { path:'/view-products', element: <ViewProducts/> },
    { path:'/create-product', element: <CreateProduct/> },
    { path:'/generate-sell', element: <GenerateSell/> },
    { path:'/generate-report', element: <GenerateReport/> },
  ])
  return routes
}

const App = (props: Props) => {

  return (
    <div className={styles["container"]}>
      <BrowserRouter>
        <Providers>
        <AppRoutes/>
          {props.children}
        </Providers>
      </BrowserRouter>
    </div>
  )
}

export default App