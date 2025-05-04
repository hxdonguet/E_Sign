import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './screen/Home/Home';
import Login from './screen/Login/Login';
import Register from './screen/Register/Register';

import RequireToken from './screen/RequireToken/RequireToken';
import UnlockToken from './screen/UnlockToken/UnlockToken';
import CheckCTS from './screen/CheckCTS/CheckCTS';
import DownloadCTS from './screen/DownloadCTS/DownloadCTS';
import CapBuCTS from './screen/CapBuCTS/CapBuCTS';

import LoginLayout from './layout/LoginLayout';
import DefaultLayout from './layout/DefaultLayout';
import EmployeeDefault from './layout/EmployeeDefault/EmployeeDefault';

import Package from './screen/Package/Package';
import Dashboard from './screen/Dashboard/Dashboard';
import About from './screen/About/About'
import AnotherServices from './screen/AnotherServices/AnotherServices';
import InfoAdmin from './screen/InfoAdmin/InfoAdmin';

import News from './screen/News/News';
import Intro1 from './screen/Intro1/Intro1';
import Intro2 from './screen/Intro2/Intro2';
import Intro3 from './screen/Intro3/Intro3';
import Elliptic1 from './screen/Elliptic1/Elliptic1';
import Elliptic2 from './screen/Elliptic2/Elliptic2';
import Elliptic3 from './screen/Elliptic3/Elliptic3';
import ECC1 from './screen/ECC1/ECC1';
import ECC2 from './screen/ECC2/ECC2';
import ECC3 from './screen/ECC3/ECC3';
import ECDSA1 from './screen/ECDSA1/ECDSA1';
import ECDSA2 from './screen/ECDSA2/ECDSA2';
import Guide from './screen/Guide/Guide';
import HistoryUpload from './screen/HistoryUpload/HistoryUpload';
import Users from './screen/Users/Users';

import EditUsers from './components/EditUsers/EditUsers';

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/RequireToken' element={<RequireToken />}></Route>
        <Route path='/UnlockToken' element={<UnlockToken />}></Route>
        <Route path='/CheckCTS' element={<CheckCTS />}></Route>
        <Route path='/DownloadCTS' element={<DownloadCTS />}></Route>
        <Route path='/CapBuCTS' element={<CapBuCTS />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/AnotherServices' element={<AnotherServices />}></Route>        
        <Route path='/News' element={<News />}></Route>
        <Route path='/Intro1' element={<Intro1 />}></Route>
        <Route path='/Intro2' element={<Intro2 />}></Route>
        <Route path='/Intro3' element={<Intro3 />}></Route>
        <Route path='/Elliptic1' element={<Elliptic1 />}></Route>
        <Route path='/Elliptic2' element={<Elliptic2 />}></Route>
        <Route path='/Elliptic3' element={<Elliptic3 />}></Route>
        <Route path='/ECC1' element={<ECC1 />}></Route>
        <Route path='/ECC2' element={<ECC2 />}></Route>
        <Route path='/ECC3' element={<ECC3 />}></Route>
        <Route path='/ECDSA1' element={<ECDSA1 />}></Route>
        <Route path='/ECDSA2' element={<ECDSA2 />}></Route>
        <Route path='/Guide' element={<Guide />}></Route>
      </Route>

      <Route path='/' element={<LoginLayout />}>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Route>

      <Route path='/' element={< EmployeeDefault />}>
        <Route path='Dashboard' element={<Dashboard />}></Route>
        <Route path='InfoAdmin' element={<InfoAdmin />}></Route>
        <Route path='EditUsers' element={<EditUsers />}></Route>
        <Route path='Packages' element={<Package />}></Route>
        <Route path='HistoryUpload' element={<HistoryUpload />}></Route>
        <Route path='Users' element={<Users />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
