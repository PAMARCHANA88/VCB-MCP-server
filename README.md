## ⚡ GHA MCP Full Stack Project with VCB Testing System

A full-stack industrial monitoring and testing system built using **FastAPI, MongoDB, MCP Server, and React**, designed for managing electrical test data and generating structured VCB (Vacuum Circuit Breaker) test reports.
📌 Project Overview

## This project integrates:

- ⚡ **FastAPI backend** for API services and data handling
- 🗄️ **MongoDB** for test data storage
- 🔌 **MCP Server** for control/communication layer
- 🌐 **React frontend** for user dashboard
- ⚙️ **VCB Testing Module** for electrical and mechanical validation reports

## The system is designed for **substation equipment testing, monitoring, and report generation**.
 🏗️ Tech Stack
##  Frontend
- React
- JavaScript
- Axios

##  Backend
- FastAPI (Python)
- Uvicorn
- Pydantic

## Database
- MongoDB

##  Other Components
- MCP Server (custom middleware/control layer)

---

##  📂 Project Structure
GHA_MCP/
│
├── BACKEND/ # FastAPI backend services
├── GHA_FRONTEND/ # React frontend UI
├── MCP_SERVER/ # MCP server logic
├── screenshots/ # UI and test report images
└── README.md
##  ⚙️ Setup & Installation
##  1️⃣ Clone Project
git clone https://github.com/your-username/GHA_MCP.git
cd GHA_MCP
## 2️⃣ Backend (FastAPI)
cd BACKEND
pip install fastapi uvicorn pymongo
Run backend:
uvicorn main:app --reload
## 3️⃣ MCP Server
cd MCP_SERVER
pip install -r requirements.txt
python main.py
## 4️⃣ MongoDB Setup
Start MongoDB locally OR use MongoDB Atlas
Update connection string:
MONGO_URI = "mongodb://localhost:27017"
## 5️⃣ Frontend (React + Vite)
cd GHA_FRONTEND
npm install
npm run dev

📌 Conclusion
This system provides an automated solution for VCB testing, monitoring, and report generation, ensuring accuracy, scalability, and real-time data handling in industrial environments.

👨‍💻 Author

PAM ARCHANA
Full Stack Developer | Electrical Engineering Projects | MCP System Development
