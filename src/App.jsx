// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Sales from './pages/Sales';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import './styles/App.css';
import './styles/Global.css';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default App;
