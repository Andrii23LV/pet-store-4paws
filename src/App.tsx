import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import {MainPage} from './pages/MainPage/MainPage'
import {AboutPage} from './pages/AboutPage/AboutPage'
import {OrderPage} from './pages/OrderPage/OrderPage'
import {Navigation} from './components/Navigation'
import {RegistrationForm} from './components/RegistrationForm'
import {LogInForm} from './components/LogInForm'
import {Footer} from './components/Footer'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/orders" element={ <OrderPage /> } />
        <Route path="/account" element={ <AuthPage /> } />
        <Route path="/account/registration" element={ <RegistrationForm /> } />
          <Route path="/account/login" element={ <LogInForm /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;