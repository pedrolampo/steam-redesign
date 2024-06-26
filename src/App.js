import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Store from './pages/Store';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Library from './pages/Library';
import Downloads from './pages/Downloads';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = {
    id: 1,
    username: 'Pedrolampo',
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          {['/', 'store', '/store/:id'].map((path) => (
            <Route key={path} path={path} element={<Store />} />
          ))}
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="library" element={<Library />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer user={user} />
      </BrowserRouter>
    </div>
  );
}

export default App;
