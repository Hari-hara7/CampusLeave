# 🏫 Student Leave Management System

A full-stack web app where **students can apply for leave**, and **teachers/admins can view, accept or reject requests**. Built using the **MERN stack** with a modern, clean UI powered by **TailwindCSS + Vite + TypeScript**.

---

## 🚀 Features

- 👤 Role-based Auth (Student & Teacher)
- 📝 Leave Application by Students
- 📋 Admin Panel for Teachers to View & Manage Requests
- ✅ Accept / ❌ Reject Leave Requests
- 🔐 JWT-based Protected Routes
- 💻 Fully Responsive & Clean UI

---

## 🧰 Tech Stack

| Technology                        | Badge                                                                                 | Purpose                                       |
|----------------------------------|----------------------------------------------------------------------------------------|-----------------------------------------------|
| **React**                        | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)       | UI development                                |
| **TypeScript**                   | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript)        | Static typing for scalability                 |
| **Tailwind CSS**                 | ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwindcss)       | Utility-first styling                         |
| **Framer Motion**                | ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer)      | Smooth animations and transitions             |
| **React Router**                 | ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=reactrouter)   | Client-side routing                           |
| **Node.js**                      | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs)               | Backend runtime                               |
| **Express.js**                   | ![Express](https://img.shields.io/badge/-Express.js-000000?logo=express)              | Backend routing and logic                     |
| **MongoDB**                      | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb)                 | NoSQL Database                                |
| **JWT**                          | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens)                   | Secure authentication                         |
| **Vite**                         | ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)          | Lightning fast frontend bundler               |

---


---

## 🛠️ Installation & Setup


## 📦 Clone the Repository

```bash
git clone https://github.com/Hari-hara7/CampusLeave.git

```



### 📦 Backend Setup

```bash
cd backend
npm install
# Create a .env file and add the following:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=5000
npm run dev
```



# 🚀 Leave Management System

## 💻 Frontend Setup

```bash
cd frontend/app
npm install
npm run dev
```







# 🛠️ Project Setup

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder with the following values:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 📡 API Endpoints

### 🔐 Auth

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | `/api/auth/register`   | Register as Student or Teacher    |
| POST   | `/api/auth/login`      | Login and receive JWT token       |

---

### 📄 Leaves

| Method | Endpoint                      | Description                                 |
|--------|-------------------------------|---------------------------------------------|
| POST   | `/api/leaves/apply`           | Apply for leave (Student only)              |
| GET    | `/api/leaves/mystatus`        | Get student's own leave status              |
| GET    | `/api/leaves`                 | Get all leave requests (Teacher only)       |
| PATCH  | `/api/leaves/:id/status`      | Accept or Reject leave request (Teacher)    |
