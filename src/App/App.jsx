import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Profil from '../pages/Profil';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="wrap-center">
        <Profil />
      </div>
    </div>
  );
}

export default App;
