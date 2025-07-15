import React, { useState } from 'react';
import UserPanel from './components/UserPanel';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleClaimed = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Leaderboard App</h1>
      <UserPanel onClaimed={handleClaimed} />
      <Leaderboard key={refresh} />
      <Footer />
    </div>
  );
}

export default App;