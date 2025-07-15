import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white text-xl font-semibold flex justify-between">
    <div>🏆 LeaderBoard</div>
    <div>
      <button className="bg-white text-blue-600 px-4 py-1 rounded">Login</button>
    </div>
  </nav>
);

export default Navbar;
