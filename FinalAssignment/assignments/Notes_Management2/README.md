<div align="center">

# 🚀 Notes Management API V2

**Advanced Enterprise-Grade RESTful API Built with Node.js & MongoDB**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

</div>

<br>

## 🌟 Overview
Welcome to **Notes Management API V2**, a fully-fledged and highly robust backend service. Built entirely from scratch, this project extends basic CRUD principles to demonstrate complex, enterprise-level backend requirements.

Featuring exactly **19 meticulously crafted endpoints**, this API tackles pagination, dynamic sorting, query parameter-based filtering, date-range bounding, and precise summary extractions. It serves as a masterclass in MongoDB data querying, robust data validation, and clean MVC architecture.

---

## ⚡ Key Features

- **Data Pagination:** Smart handling of `page` and `limit` query parameters. Responses include comprehensive metadata (`total`, `page`, `limit`, `totalPages`, `hasNextPage`, `hasPrevPage`).
- **Dynamic Sorting:** Ascending and descending sort mechanisms dynamically applicable to multiple fields (`title`, `createdAt`, `updatedAt`, `category`).
- **Complex Query Filtering:** Stackable queries. Filter dynamically by combining query criteria like Category and Pinned Status.
- **Date Range Bounding:** Secure retrieval of data within explicitly defined `from` and `to` date parameters.
- **Summary Extraction:** Optimized MongoDB querying using `.select()` to dynamically fetch specific fields (bypassing heavy content loading) for rapid UI-friendly summaries.
- **Robust Route Architecture:** Masterful configuration of Express routing to completely prevent route shadowing and conflicts between dynamic `/:id` parameters and exact query endpoints.
- **Complete Validation & Error Handling:** Graceful handling of invalid Object IDs, missing query parameters, and malformed request bodies with clear, predictable JSON responses.

---

## 📁 Project Structure

```text
Notes_Management_2/
├── src/
│   ├── config/
│   │   └── db.js               # Database connection setup
│   ├── controllers/
│   │   └── note.controller.js  # 19 separate, highly modular controller functions
│   ├── middlewares/            # Custom Express middlewares
│   ├── models/
│   │   └── note.model.js       # Mongoose Schema & Model definitions
│   ├── routes/
│   │   └── note.routes.js      # Intricately ordered Express routers
│   ├── app.js                  # Express app initialization
│   └── index.js                # Application entry point & server startup
├── .env                        # Environment configurations
├── .env.example                # Template for environment variables
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (Local instance or MongoDB Atlas)

### 2️⃣ Installation
Clone the repository and install the required dependencies:
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root directory based on the `.env.example`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/notes_management_v2
```

### 4️⃣ Run the Server
For development (with automatic reloads using Nodemon):
```bash
npm run dev
```
For production:
```bash
npm start
```

---

## 📡 The 19 API Endpoints

All endpoints are strictly prefixed with **`/api/notes`**.

### 🟢 Core CRUD & Bulk Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/notes` | Create a single note |
| **POST** | `/api/notes/bulk` | Create multiple notes at once using an array |
| **GET** | `/api/notes` | Get all notes |
| **GET** | `/api/notes/:id` | Get a specific note by ID |
| **PUT** | `/api/notes/:id` | Completely replace a note (defaults apply) |
| **PATCH**| `/api/notes/:id` | Partially update a note (only sent fields) |
| **DELETE**| `/api/notes/:id` | Delete a specific note |
| **DELETE**| `/api/notes/bulk` | Delete multiple notes using an array of IDs |

### 🟡 Specialized Route Parameters
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/notes/category/:category` | Fetch notes by category (`work`, `personal`, `study`) |
| **GET** | `/api/notes/status/:isPinned` | Fetch notes by boolean status (`true`, `false`) |
| **GET** | `/api/notes/:id/summary` | Fetch only specific fields for a summary |

### 🔵 Advanced Query Filtering
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/notes/filter` | General filter using `?category=X&isPinned=Y` |
| **GET** | `/api/notes/filter/pinned` | Native pin filter, combinable with `?category=X` |
| **GET** | `/api/notes/filter/category` | Filter directly using query param `?name=X` |
| **GET** | `/api/notes/filter/date-range`| Filter using exact bounding `?from=X&to=Y` |

### 🟣 Pagination & Sorting Data
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/notes/paginate` | Paginate all notes `?page=X&limit=Y` |
| **GET** | `/api/notes/paginate/category/:category`| Paginate within a category `?page=X&limit=Y` |
| **GET** | `/api/notes/sort` | Dynamic sorting `?sortBy=X&order=Y` |
| **GET** | `/api/notes/sort/pinned` | Sort pinned notes dynamically `?sortBy=X&order=Y` |

---

## 📝 Response Format

Every single endpoint securely resolves using the exact following standard format:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": [],
  "count": 10,
  "pagination": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```
*(Note: `count` and `pagination` are dynamically omitted when not applicable to the request)*

---

<div align="center">
  <b>Developed with ❤️ for maximum performance and developer experience.</b>
</div>
