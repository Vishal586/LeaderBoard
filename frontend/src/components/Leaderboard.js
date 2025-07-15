import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../api/api';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
    const [board, setBoard] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetchBoard();
    }, []);

    const fetchBoard = async () => {
        const res = await getLeaderboard();
        setBoard(res.data);
    };

    const topThree = board.slice(0, 3);
    const others = board.slice(3, 10);

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-header">
                <h1 className="leaderboard-title">🏆 Leaderboard</h1>
            </div>

            <div className="leaderboard-content">
                {/* User Selection Dropdown */}
                <div className="user-dropdown">
                    <button 
                        className="dropdown-button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span>{selectedUser ? selectedUser.name : 'Select a user'}</span>
                        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {board.slice(0, 10).map((user) => (
                                <div
                                    key={user._id}
                                    className={`dropdown-item ${selectedUser?._id === user._id ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    <span>{user.name}</span>
                                    <span>{user.totalPoints} pts</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Top 3 Podium */}
                <div className="podium-container">
                    {topThree.map((user, index) => (
                        <div key={user._id} className={`podium-place podium-place-${index + 1}`}>
                            <div className={`place-badge badge-${index + 1}`}>
                                {index + 1}
                            </div>
                            <div className="place-emoji">
                                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                            </div>
                            <div className={`user-avatar avatar-${index + 1}`}>
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <h3 className="user-name">{user.name}</h3>
                            <div className="user-id">ID: {user._id.slice(-6)}</div>
                            <div className="user-points">
                                <span>{user.totalPoints}</span>
                                <span className="points-label">pts</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leaderboard Table */}
                <table className="leaderboard-table">
                    <thead className="table-header">
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others.map((user, index) => (
                            <tr key={user._id} className="table-row">
                                <td className="table-rank">{index + 4}</td>
                                <td>
                                    <div className="table-user">
                                        <div className="table-avatar">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="table-name">{user.name}</div>
                                            <div className="table-id">ID: {user._id.slice(-6)}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-points">{user.totalPoints} pts</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;