---

# 🏢 Building Entry System

Welcome to the **Building Entry System**! This project tracks people entering and leaving a building using MongoDB, Node.js with TypeScript, and Express.js. It includes both backend and frontend components, ensuring a comprehensive and user-friendly experience.

## 🚀 Project Overview

This project provides a system to monitor and manage building entries and exits. It includes:

- **Backend:** API endpoints for entry, exit, and analytics management.
- **Frontend:** Minimalist UI for interacting with the system and viewing analytics.

## 🛠️ Features

### Backend Features

- **Entry and Exit Management:** Register and track entries and exits.
- **Analytics:** View real-time analytics on building occupancy and entry/exit patterns.
- **API Endpoints:**
  - `/entry` - Register entry events.
  - `/exit` - Register exit events.
  - `/people` - Get a list of people currently inside the building.
  - `/history` - Retrieve entry and exit history for a person within a date range.
  - `/analytics` - Get analytics on building occupancy and patterns.

### Frontend Features

- **Entry Page:** Interface to register a person's entry.
- **Exit Page:** Interface to register a person's exit.
- **Analytics Page:** Display building occupancy and entry/exit analytics.

## 💻 Technologies Used

- **Backend:**
  - Node.js
  - TypeScript
  - Express.js
  - MongoDB
- **Frontend:**
  - ReactJS
  - TypeScript
- **Tools:**
  - GitHub for version control
  - Postman for API testing

## 🔧 Setup and Installation

### Backend

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sriramkrish68/building-user-management.git
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd building-entry-system/backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the `backend` directory and add your MongoDB URI:

   ```env
   MONGODB_URI=mongodb://localhost:27017/buildingdb
   ```

5. **Run the Backend Server:**

   ```bash
   npm run dev
   ```

### Frontend

1. **Navigate to the Frontend Directory:**

   ```bash
   cd building-entry-system/frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Frontend Server:**

   ```bash
   npm start
   ```

## 📚 API Documentation

### Entry Endpoint

- **URL:** `/entry`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "id": "person123",
    "entryGate": "Gate1"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Entry registered successfully"
  }
  ```

### Exit Endpoint

- **URL:** `/exit`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "id": "person123",
    "exitGate": "Gate1"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Exit registered successfully"
  }
  ```

### People Endpoint

- **URL:** `/people`
- **Method:** `GET`
- **Response:**

  ```json
  [
    {
      "id": "person123",
      "entryGate": "Gate1",
      "timestamp": "2024-08-02T10:00:00Z"
    }
  ]
  ```

### History Endpoint

- **URL:** `/history`
- **Method:** `GET`
- **Query Parameters:**

  - `id` - Person's ID
  - `startDate` - Start date (YYYY-MM-DD)
  - `endDate` - End date (YYYY-MM-DD)

- **Response:**

  ```json
  [
    {
      "id": "person123",
      "entryGate": "Gate1",
      "exitGate": "Gate2",
      "timestamp": "2024-08-02T10:00:00Z"
    }
  ]
  ```

### Analytics Endpoint

- **URL:** `/analytics`
- **Method:** `GET`
- **Response:**

  ```json
  {
    "currentOccupancy": 5,
    "averageDuration": "1h 30m",
    "peakEntryTime": "08:00",
    "peakExitTime": "17:00",
    "mostFrequentGate": "Gate1"
  }
  ```

## 🧪 Testing

- **Backend Tests:** Run `npm test` in the `backend` directory.
- **Frontend Tests:** Run `npm test` in the `frontend` directory.


## 🤝 Contributing

Feel free to open issues or submit pull requests. For significant changes, please open an issue first to discuss what you would like to change.

