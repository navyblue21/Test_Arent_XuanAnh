import './App.css';
import HeaderPage from './page/Header/header';
import FooterPage from './page/Footer/footer';
import DashboardPage from './page/Dashboard/dashboard';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import MyPage from './page/MyPage/mypage';

function App() {
  return (
    <>
    <Router>
    
      <HeaderPage />
      <div className="App">
        
        <Routes>
          <Route path='/' element={<DashboardPage/>}></Route>
          <Route path='/my-page' element={<MyPage />}></Route>
          {/* <Route path='/contact' element={< Contact />}></Route> */}
        </Routes>
      </div>
      <FooterPage />
      
    </Router>
    </>
  );
}

export default App;
