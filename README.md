# Marketplace Platform (MERN Stack) (Minh Hung Nguyen)
# Demo: https://youtu.be/PdFPrbv8fg0
A comprehensive services marketplace built with the MERN stack (MongoDB, Express, Vite+React, Node.js), featuring secure payments with Stripe, image uploads via Cloudinary, and an integrated messaging system.

## 🚀 Features

*   **Authentication & Security:** Secure registration and login using JWT and HttpOnly Cookies.
*   **Gig Management:** Sellers can create, update, and delete service listings (Gigs).
*   **Search & Filtering:** Advanced filtering by category, price, and sorting options.
*   **Order System:** Complete checkout flow for purchasing services.
*   **Secure Payments:** Integrated **Stripe** payment gateway for real-time transactions.
*   **Messaging System:** Internal chat functionality for buyers and sellers to communicate.
*   **Reviews & Ratings:** Review system for completed orders.
*   **Dashboard:** specialized dashboards for Managing Gigs and Orders.

## 🛠 Tech Stack

### Client
*   **React (Vite):** Fast frontend build tool.
*   **SCSS:** For modular and maintainable styling.
*   **React Query (TanStack Query):** For efficient server-state management.
*   **Axios:** For HTTP requests.

### Server
*   **Node.js & Express:** Backend API server.
*   **MongoDB & Mongoose:** NoSQL database for flexible data storage.
*   **JWT:** For secure stateless authentication.

### Services
*   **Stripe:** Payment processing.
*   **Cloudinary:** Image hosting and management.

---

## 💻 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   **Node.js** (v16 or higher)
*   **MongoDB** (Installed locally or using MongoDB Atlas)
*   **Stripe Account** (For API keys)
*   **Cloudinary Account** (For image upload credentials)

### 1. Installation

Clone the repository and install dependencies for both the `server` and `client`.

```bash
# Clone the repository
git clone <your-repo-link>
cd <your-project-name>

# 1. Setup Server
cd server
npm install

# 2. Setup Client
cd ../client
npm install
```

### 2. Environment Configuration

You must configure environment variables for the application to work.

#### **Server (.env)**
Create a `.env` file in the `server/` directory:

```env
# Server Port (Optional, defaults to 8800)
PORT=8800

# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/<your-database-name>

# JWT Secret (Random strong string)
JWT_SECRET=your_super_secret_key_here

# Stripe Secret Key (from Stripe Dashboard)
STRIPE=sk_test_...

# Environment (development/production)
NODE_ENV=development
```

#### **Client (.env)**
Create a `.env` file in the `client/` directory:

```env
# Backend API URL
VITE_API_URL=http://localhost:8800/api

# Stripe Publishable Key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_PRESET=your_upload_preset
```

### 3. Running the Application

Open two separate terminal windows/tabs.

**Terminal 1 (Backend):**
```bash
cd server
npm start
# Server should run on http://localhost:8800
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
# Vite server usually runs on http://localhost:5173
```

## ⚠️ Common Issues

*   **CORS Error:** If you see CORS errors in the console, check that the `origin` in `server.js` matches your client URL (e.g., `http://localhost:5173`).
*   **Images Not Uploading:** Verify your Cloudinary `Cloud Name` and `Upload Preset` in the client `.env` file. The preset must be set to "Unsigned" in Cloudinary settings.
*   **Payment Failed:** Ensure you are using Stripe Test Cards (e.g., `4242 4242...`) and your Secret Key is correct.
