
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import WelcomePage from './components/WelcomePage';
import RegisterPage from './components/RegisterPage';
import SigninPage from './components/SigninPage';
import Account from './components/Account';

function App() {
  return (
  <Router>
    <Routes>
      <Route path ="/" element={<WelcomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
      <Route path="/account" element={<Account/>}/>
      

    </Routes>
  </Router>
    );
}

export default App;
