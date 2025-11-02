# 🌐 LinkedIn Clone – Full Stack Project  

A fully functional **LinkedIn-style social platform** with user authentication, post creation, and a public feed.  
Built as part of the **AppDost Full Stack Developer Internship Assignment**.

---

## 🚀 Live Demo  
🔗 **[Visit Live Site](https://linkedin-clone-kappa-ruddy.vercel.app)**  

---

## 🛠 Tech Stack  
**Frontend:** React.js, HTML, CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas or Local)  
**Authentication:** JWT (JSON Web Tokens)  
**Deployment:** Vercel (Frontend + Backend)

---

## ✨ Features  

### ✅ Core Features  
- User registration and login  
- Create and view text-based posts  
- Public feed showing all users’ posts  
- Automatic post timestamps  
- User session management (persistent login)  
- Secure logout functionality  

### 🔮 Planned (Future) Features  
- Like & comment system  
- Edit and delete own posts  
- User profile pages  
- Image upload support  

---

## 🧩 Project Structure  

linkedin-clone/
├── frontend/ # React.js application
├── backend/ # Node.js / Express API
└── README.md

yaml
Copy code

---

## 🔗 API Endpoints  

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login existing user |
| POST | `/api/posts` | Create a new post |
| GET  | `/api/posts` | Retrieve all posts |

---

## ⚙️ Run Locally  

### **Prerequisites**  
- Install **Node.js**  
- Have a **MongoDB Atlas account** or local MongoDB instance  

---

### **Backend Setup**  
```bash
cd backend
npm install
Create a .env file inside /backend and add:

ini
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Then run:

bash
Copy code
npm start
Frontend Setup
bash
Copy code
cd frontend
npm install
Create a .env file inside /frontend and add:

ini
Copy code
REACT_APP_API_URL=http://localhost:5000
Then run:

bash
Copy code
npm start
✅ Testing Steps
Step 1 — Sign Up
Visit the Live Demo

Register with:

makefile
Copy code
Email: testuser@example.com  
Password: testpassword123  
Name: Test User
Step 2 — Login
Login using the credentials.
✅ Expected: Redirected to main feed.

Step 3 — Create Post
Click “Create Post” → type a message → submit.
✅ Expected: Post appears instantly on feed.

Step 4 — Public Feed
Feed should show posts from all users (latest first).
✅ Expected: Timestamps visible and correctly ordered.

Step 5 — Logout
Click logout (top-right).
✅ Expected: Redirect to login page and session cleared.

Step 6 — Mobile Responsiveness
Open Chrome DevTools → Device Toolbar to test various devices.
✅ Expected: Layout adjusts cleanly for all screens.

🧑‍💻 Author
Deepa Sharma
Full Stack Developer 
📧 deepasharma4421@example.com
