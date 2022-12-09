import './App.css';
import HeaderPage from './page/Header/header';
import FooterPage from './page/Footer/footer';
import DashboardPage from './page/Dashboard/dashboard';

function App() {
  return (
    <>
      <HeaderPage />
      <div className="App">
        <DashboardPage/>
      </div>
      <FooterPage />
    </>
  );
}

export default App;
