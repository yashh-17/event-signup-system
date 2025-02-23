
# **Event Signup System**
A **MERN Stack** web application for managing event signups, allowing users to view upcoming events and register for them. The system is built using **MongoDB, Express.js, React, and Node.js**.

---

## **📌 Features**
- 📅 **View Upcoming Events** with details such as date, location, and signup count  
- ✅ **User Registration for Events** with real-time signup tracking  
- 🌍 **Online & Offline Event Management**  
- 🔗 **RESTful API for event management**  

---

## **🛠 Tech Stack**
### **Frontend** (React.js)  
- **React** for UI  
- **React Router** for navigation  
- **Axios** for API requests  

### **Backend** (Node.js & Express.js)  
- **Express.js** for server & API  
- **MongoDB** for database  
- **Mongoose** for data modeling  
- **CORS** for cross-origin requests  

---



---

## **🚀 How to Run the Project**

### **1️⃣ Setup Backend**
```sh
cd backend
npm install
node server.js
```
> **Server runs on:** `http://localhost:5000`

---

### **2️⃣ Setup Frontend**
```sh
cd eventsignup
npm install
npm start
```
> **Frontend runs on:** `http://localhost:3000`

---

## **📡 API Endpoints**
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | `/api/events`       | Fetch all events      |
| POST   | `/api/events/signup/:id` | Register for an event |

---

## **📌 Future Enhancements**
- 👤 **User Authentication (JWT)**
- 📧 **Email Notifications for Signups**
- 📊 **Admin Dashboard for Event Management**

---
  
