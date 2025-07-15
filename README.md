🏆 Leaderboard Web App:-

A responsive and interactive Leaderboard Web Application that displays top-performing users, allows point claiming, and supports user addition functionalities. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and TailwindCSS for styling.

🚀 Features
🎖️ Top 3 Users Display
Visually highlights the top 3 users with their respective:-

Ranks
Names
Points

📜 User List Dropdown
A dropdown or selection list that displays the top 10 users (excluding top 3).

Clicking on a user from this list:

Shows the user profile with avatar, name, and current points.

➕ Add User
Add a new user by entering:-

Name
Points

Automatically positions the new user in the leaderboard based on score.

🎁 Claim Points Button
Appears next to the selected user.

Clicking it:-

Adds bonus points to the selected user.
Automatically reorders the leaderboard based on updated points.

📊 Live Leaderboard Sorting
All users are sorted in real-time based on their points.
Ranks are dynamically updated when points change or users are added.

🧰 Tech Stack:-
| Tech                 | Usage                             |
| -------------------- | --------------------------------- |
| **Frontend**         | React.js, TailwindCSS             |
| **Backend**          | Node.js, Express.js               |
| **Database**         | MongoDB (MongoDB Atlas)           |
| **API Requests**     | Axios                             |
| **State Management** | useState, useEffect (React Hooks) |


⚙️ Setup Instructions:-

1. Clone the Repository:-
   
   git clone https://github.com/yourusername/Leaderboard.git
   
   cd Leaderboard

2. Setup Backend:-
   
   cd backend
   
   npm install
   
   # Configure .env for MongoDB connection
   
   npm start

3. Setup Frontend:-
   
   cd frontend
   
   npm install
   
   npm start

🌐 MongoDB Atlas Configuration
Make sure to:-

Whitelist your IP in MongoDB Atlas.

Add the connection string in your backend .env file:-

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/leaderboardDB

📷 UI Screens:-

Top 3 users in podium format.

Dropdown for rest of the top 10.

Add User form.

Claim Button for bonus points.

📌 Future Improvements:-

User login/authentication

Export leaderboard as CSV

Animation for rank changes

Unit testing

🧑‍💻 Author
Vishal Kumar
