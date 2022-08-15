import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import {MainPage} from './pages/MainPage/MainPage'
import {AboutPage} from './pages/AboutPage/AboutPage'
import {OrderPage} from './pages/OrderPage/OrderPage'
import {Navigation} from './components/Navigation'
import {RegistrationForm} from './components/Auth/RegistrationForm'
import {LogInForm} from './components/Auth/LogInForm'
import {Footer} from './components/Footer'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/pet-store-4paws" element={ <MainPage /> } />
        <Route path="/pet-store-4paws/about" element={ <AboutPage /> } />
        <Route path="/pet-store-4paws/orders" element={ <OrderPage /> } />
        <Route path="/pet-store-4paws/account" element={ <AuthPage /> } />
        <Route path="/pet-store-4paws/account/registration" element={ <RegistrationForm /> } />
          <Route path="/pet-store-4paws/account/login" element={ <LogInForm /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;