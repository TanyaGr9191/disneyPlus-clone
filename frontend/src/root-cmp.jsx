import { Route, Routes } from 'react-router-dom'
// import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import routes from './routes'
import './assets/scss/styles.scss'

function App() {
  return (
    <section className="app">
      {/* <AppHeader/> */}
      <Routes>
      {routes.map(route => 
                <Route key={route.path} 
                element={route.element} 
                path={route.path} />)}
      </Routes>
      <AppFooter/>
    </section>
  )
}

export default App;
