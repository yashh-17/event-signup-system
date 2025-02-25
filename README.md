
---

# **Event Signup System**  
A **MERN Stack** web application for managing event signups, allowing users to view upcoming events and register for them. The system is built using **MongoDB, Express.js, React, and Node.js**.

---

## **🛠 Tech Stack**  

### **Frontend** (React.js)  
- **React** – For building the user interface  
- **React Router** – For handling navigation (if applicable)  
- **Fetch API** – For making API requests  

### **Backend** (Node.js & Express.js)  
- **Express.js** – For server and API handling  
- **MongoDB** – For storing event data  
- **Mongoose** – For database modeling  
- **CORS** – To handle cross-origin requests  
- **dotenv** – For managing environment variables (if needed)  

---

## **🚀 How to Run the Project**  

### **1️⃣ Setup Backend**  
```sh
cd backend
npm install
node server.js
```
> **Backend runs on:** `http://localhost:5000`

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

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| **GET**  | `/api/events`            | Fetch all events          |
| **POST** | `/api/events/signup/:id` | Register for an event     |

---

## **📌 Future Enhancements**  
✅ **User Authentication (JWT-based login system)**  
✅ **Email Notifications for Event Signups**  
✅ **Admin Dashboard for Managing Events**  
✅ **Pagination & Search for Events**  

---
