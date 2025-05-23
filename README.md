#  Recruitment Pipeline - Full Stack App

A full-stack recruitment interface to manage candidates through application stages, featuring a Kanban-style UI built with React and a backend API built with Node.js and Express.

---

##  Features

### Frontend (React)
- Responsive drag-and-drop Kanban UI
- Add / Edit / Delete candidates
- Filter candidates by stage, score, and date
- Reusable modular components
- Assessment status indicators

### Backend (Node.js + Express)
- REST API with CRUD functionality
- Data stored in memory (via JSON)
- Connected with frontend through Axios

---

##  Setup Instructions

### Backend
```bash
cd backend
npm install
node server.js 
```

### Frontend
```bash
cd frontend
npm install
npm start

If you encounter any errors like:

Module not found: Can't resolve 'axios'
Module not found: Can't resolve 'react-icons/fi'
Run the following command in the frontend folder to resolve them:
npm install axios react-icons
```

---

## Usage

- Drag candidates between stages
- Add new candidates via the ➕ button (top right)
- Edit/Delete candidates via the ⋮ menu in cards
- View assessment status badges if available

---

## API Endpoints (http://localhost:5000/api/candidates)

- `GET /` → Get all candidates
- `GET /:id` → Get candidate by ID
- `POST /` → Create candidate
- `PUT /:id` → Update candidate
- `DELETE /:id` → Delete candidate

---

## Task Requirements Checklist

- [x] React-based UI
- [x] Responsive layout matching design
- [x] No Tailwind CSS used
- [x] Modular and reusable components
- [x] RESTful backend with Node.js + Express
- [x] CRUD operations for candidate data
- [x] In-memory or file-based JSON storage
- [x] Full-stack integration
- [x] Drag-and-drop implemented

---

## Notes

- No database used; data is stored temporarily in memory .
- This is a technical assessment project and not intended for production.

---

## Created by: Demini Waidyanatha
