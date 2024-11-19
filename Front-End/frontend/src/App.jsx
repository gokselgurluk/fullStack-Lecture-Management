import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Lecture from './layout/Lecture';
import User from './layout/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<User />} />
          <Route path="lectures" element={<Lecture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
