# Modern Library Management System (LibraHub) 📚⚡

A state-of-the-art, high-performance **MERN Stack Library Management System** crafted with modern UI/UX design principles, responsive bento layouts, and fluid micro-interactions.

---

## 🌐 Live Deployment

🚀 **Live App**: [Library Management System](https://github.com/Archi-1804/Library-management-system)

---

## Key Highlights & Features 🚀

- **Modern Clean Light Theme**: Designed with custom CSS variables, floating pill navigation containers, and accessible contrast.
- **Asymmetrical Bento Dashboard**: Side-by-side catalog upload feeds, real-time transaction activity monitors, and interactive news feeds.
- **Multi-Role Authentication**:
  - **Student Access**: Search digital catalog, check availability status, and reserve publications.
  - **Staff Access**: Track member reservations and manage issue/return queues.
  - **Admin Access**: Manage catalog items, member profiles, and transaction records.
- **Fast Demo Login**: Built-in 1-click login selector chips with prefilled demo credentials.
- **Automated DB Seed Engine**: Automatically seeds default Student, Staff, and Admin accounts in MongoDB on boot up.

---

## Demo Accounts 🔑

| Role | ID / Username | Password |
|---|---|---|
| **Student** | `2023STUDENT01` | `123456` |
| **Staff** | `101STAFF` | `123456` |
| **Admin** | `ADMIN01` | `admin123` |

---

## Tech Stack 🛠️

- **Frontend**: React.js (v17), Material-UI (v4), Vanilla CSS Custom Properties, React Router (v5)
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Bcrypt, CORS
- **Authentication**: JWT & Bcrypt password salting/hashing

---

## Getting Started 🔥

### 1. Prerequisites
- Node.js (v14+ or v16+)
- MongoDB instance (local or MongoDB Atlas connection URI)

### 2. Backend Setup 🍿

```bash
cd backend
npm install
```

Create a `.env` file in `backend/.env`:
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Run the backend server:
```bash
npm start
```

### 3. Frontend Setup 🍧

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/
```

Run the frontend app:
```bash
npm start
```

---

## Author 📝

Crafted with ❤️ by **[Archi](https://github.com/Archi-1804)**

---

## License 🏆

This repository is licensed under the [MIT License](LICENSE).
