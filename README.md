# 🏨 Booking Hotel Web Application

A full-stack hotel booking web application built with **Next.js**, **Supabase**, and **NextAuth.js**.  
This project demonstrates authentication, authorization, and CRUD operations using modern web technologies.

---

## 🚀 Features

- User authentication using **NextAuth.js**
- Session-based authorization and protected routes
- Hotel listing and booking management
- Create, update, and delete bookings (**CRUD**)
- REST API integration for data fetching and mutations
- Responsive UI with reusable components

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, JavaScript (ES6+)
- **Backend:** Next.js API Routes / Server Actions
- **Authentication:** NextAuth.js
- **Database:** Supabase (PostgreSQL)
- **Styling:** CSS / Tailwind CSS
- **Deployment:** Vercel

---

## 🔐 Authentication & Authorization

- Authentication handled via **NextAuth.js**
- Session management for logged-in users
- Protected routes using middleware
- Authorization logic applied to restrict access to booking features

---

## 🗄 Database

- **Supabase PostgreSQL** used for persistent data storage
- Tables for users, hotels, and bookings
- Database operations handled via Supabase client

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/xuankhai1910/booking-hotel-website.git
cd booking-hotel

###2️⃣ Install dependencies
npm install

###3️⃣ Environment variables

Create a .env.local file in the root directory:

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

###4️⃣ Run the development server
npm run dev


Open http://localhost:3000 in your browser.

📦 Project Structure
app/            # App Router pages & layouts
components/     # Reusable UI components
lib/            # Supabase & authentication utilities
api/            # API routes / server logic

🎯 Learning Outcomes

Built a real-world full-stack application with Next.js

Implemented authentication and authorization flow

Worked with REST APIs and async data handling

Integrated Supabase as backend and database service

Improved component structure and clean code practices
