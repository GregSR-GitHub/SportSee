import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Profil from '../pages/Profil';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="wrap-center">
        <Routes>
          <Route path="/user/:userId"  element={<Profil />} /> 
          <Route path="*"  element={<Profil />} /> 
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
