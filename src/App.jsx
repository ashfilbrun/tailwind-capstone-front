import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './views/Main'
import Footer from './components/Footer'
import Context from './Context'



function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
    birthDate: '',
    sex: '',
    illnessId: '',
    googleId: ''
  })

  return (
    <div>
      <Context.Provider value={{ userInfo, setUserInfo }}>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default App
