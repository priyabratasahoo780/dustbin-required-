<div align="center">

# 📝 Notes Management API

**A Robust, Production-Ready RESTful API Built with Node.js & MongoDB**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

</div>

<br>

## 🌟 Overview
The **Notes Management API** is a robust backend service designed to manage personal, study, and work notes. It follows a highly structured **Model-View-Controller (MVC)** design pattern, ensuring that the codebase is clean, scalable, and easy to maintain. 

This API provides full CRUD capabilities, bulk operations, and strict validation using Mongoose and Express.

---

## ✨ Key Features
- **Comprehensive CRUD Operations:** Create, Read, Update (PUT/PATCH), and Delete notes.
- **Bulk Data Handling:** Perform bulk insertions and deletions for high efficiency.
- **MVC Architecture:** Clean separation of concerns (Routes -> Controllers -> Models).
- **Data Validation:** Strict Mongoose-driven schema validation combined with rigorous ObjectID format checking.
- **Unified API Responses:** Every endpoint follows a strict standard response format: `{ success, message, data }`.

---

## 📁 Project Structure

```text
Notes_Management1/
├── src/
│   ├── config/
│   │   └── db.js               # Database connection logic
│   ├── controllers/
│   │   └── note.controller.js  # Core business logic for notes
│   ├── middlewares/            # Custom Express middlewares
│   ├── models/
│   │   └── note.model.js       # Mongoose Schema definitions
│   ├── routes/
│   │   └── note.routes.js      # Express router configurations
│   ├── app.js                  # Express app setup and route mounting
│   └── index.js                # Application entry point & server startup
├── .env                        # Environment variables (Port, MongoDB URI)
├── .env.example                # Example environment variables template
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
- **Node.js** (v14 or higher recommended)
- **MongoDB** (Local instance or MongoDB Atlas)

### 2️⃣ Installation
Clone the repository, navigate to the project directory, and install dependencies:
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root directory based on the `.env.example` template:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/notes_management
```

### 4️⃣ Run the Server
For development (with automatic reloads using `nodemon`):
```bash
npm run dev
```
For production:
```bash
npm start
```

---

## 📡 API Endpoints

**Base URL:** `/api/notes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/notes` | Create a single note |
| **POST** | `/api/notes/bulk` | Create multiple notes at once |
| **GET** | `/api/notes` | Get all notes |
| **GET** | `/api/notes/:id` | Get a single note by ID |
| **PUT** | `/api/notes/:id` | Replace a note completely (full update) |
| **PATCH**| `/api/notes/:id` | Update specific fields only (partial update) |
| **DELETE**| `/api/notes/:id` | Delete a single note by ID |
| **DELETE**| `/api/notes/bulk` | Delete multiple notes by their IDs |

### Request & Response Examples

**POST `/api/notes`**
```json
{
  "title": "Team standup agenda",
  "content": "Discuss sprint blockers and deployment plan",
  "category": "work",
  "isPinned": true
}
```

**Success Response `(201 Created)`**
```json
{
  "success": true,
  "message": "Note created successfully",
  "data": {
    "_id": "64b1f2c3e4d5a6b7c8d9e0f1",
    "title": "Team standup agenda",
    "content": "Discuss sprint blockers and deployment plan",
    "category": "work",
    "isPinned": true,
    "createdAt": "2023-10-25T10:00:00.000Z",
    "updatedAt": "2023-10-25T10:00:00.000Z"
  }
}
```

---

## 🛠️ Technology Stack
- **Node.js & Express.js** - Powerful and lightweight web framework
- **MongoDB & Mongoose** - NoSQL database and Object Data Modeling (ODM)
- **Dotenv** - Environment variable management
- **Nodemon** - Development utility for automatic restarts

---

<div align="center">
  <b>Developed with ❤️ for maximum performance and developer experience.</b>
</div>
