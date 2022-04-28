//import logo from './logo.svg';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuComponent from './Components/MenuComponents'
import CompanyDetailsComponent from './Components/CompanyDetailsComponent'
import CompaniesListComponent from './Components/CompaniesListComponent'
import LoginComponent from './Components/LoginComponent';
import WatchListComponent from './Components/WatchListComponent'
import PerformanceComponent from './Components/PerformanceComponent';

function App() {
  return <div>
    <MenuComponent loggedIn={true} />
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent/>} />
          <Route path="companies" element={<CompaniesListComponent/>} />
          <Route path="watchlist" element={<WatchListComponent/>} />
          <Route path="compareperformance" element={<PerformanceComponent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>

}

export default App;