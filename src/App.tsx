import {Route, Routes} from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import {AboutPage} from './pages/AboutPage'
import {OrderPage} from './pages/OrderPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/orders" element={ <OrderPage /> } />
      </Routes>
    </>
  )
}

export default App;