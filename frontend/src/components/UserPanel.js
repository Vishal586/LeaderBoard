import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser, claimPoints, getHistory, getLeaderboard } from '../api/api';
import '../styles/UserPanel.css';

const UserPanel = ({ onClaimed }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [newUser, setNewUser] = useState('');
    const [claimed, setClaimed] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await fetchUsers();
        setUsers(res.data.slice(0, 10)); // top 10
    };

    const handleAddUser = async () => {
        if (!newUser) return;
        await addUser(newUser);
        setNewUser('');
        loadUsers();
    };

    const handleClaim = async () => {
        if (!selectedUser) return;
        const res = await claimPoints(selectedUser);
        setClaimed(res.data.points);
        onClaimed(); // refresh leaderboard

        const historyRes = await getHistory(selectedUser);
        setHistory(historyRes.data);
    };

    return (
        <div className="user-panel">
            <div className="user-controls">
                <select
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="user-select"
                >
                    <option value="">Select User</option>
                    {users.map((user) => (
                        <option key={user._id} value={user._id}>
                            {user.name}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleClaim}
                    className="btn btn-claim"
                >
                    Claim
                </button>
            </div>

            {claimed && (
                <p className="points-earned">
                    🎉 You earned <strong>{claimed}</strong> points!
                </p>
            )}

            <div className="user-input-group">
                <input
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    placeholder="Enter new user"
                    className="user-input"
                />
                <button
                    onClick={handleAddUser}
                    className="btn btn-add"
                >
                    Add User
                </button>
            </div>

            <div className="history-section">
                <h3 className="history-title">Claim History</h3>
                <ul className="history-list">
                    {history.map((h) => (
                        <li key={h._id} className="history-item">
                            {new Date(h.timestamp).toLocaleString()} — {h.points} points
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserPanel;