import './App.css'
import Authenticate from './components/Authenticate.jsx'
import SingUpForm from './components/SignUpForm.jsx'
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
  <Authenticate token={token} setToken={setToken} />
  <SingUpForm token={token} setToken={setToken} />
    </>
  )
}

export default App
