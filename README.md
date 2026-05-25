# 🚀 AI Email Reply Generator (Chrome Extension + Full Stack AI App)

## 🌐 Live Demo

👉 [https://ai-powered-email-reply-generators.netlify.app/](https://ai-powered-email-reply-generators.netlify.app/)

---

## 📌 Overview

AI Email Reply Generator is a full-stack AI-powered productivity tool that generates professional email replies using **Google Gemini AI**. It works as both a **web application** and a **Chrome extension integrated into Gmail**, allowing users to generate instant email responses directly inside their workflow.

This project combines **Spring Boot backend, React frontend, and Chrome Extension (Manifest V3)** to deliver a real-world AI automation experience.

---

## ✨ Features

* ⚡ One-click AI email reply generation inside Gmail
* 🧠 Context-aware response generation using Gemini AI
* 🎯 Tone selection (Professional, Casual, Friendly)
* 🧩 Chrome Extension integration with Gmail UI injection
* 🔄 Real-time backend communication using REST APIs
* 📋 Auto-insert AI response into email compose box
* 🌐 Fully deployed frontend (Netlify)
* ⏳ Loading states and smooth UX handling

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React.js
* Material UI
* Axios

### 🔹 Backend

* Spring Boot
* REST APIs
* WebClient (Reactive HTTP calls)
* WebFlux
* Jackson (JSON parsing)

### 🔹 AI Integration

* Google Gemini API

### 🔹 Chrome Extension

* JavaScript (Vanilla)
* Content Scripts
* MutationObserver
* DOM Manipulation
* Chrome Extension Manifest V3

---

## 🧠 System Architecture

```
Gmail UI
   ↓
Chrome Extension (content.js)
   ↓
Spring Boot Backend API
   ↓
Google Gemini AI
   ↓
Generated Email Reply
   ↓
Injected back into Gmail
```

---

## ⚙️ How It Works

1. Chrome extension detects Gmail compose window using MutationObserver
2. Extracts email content from DOM
3. Sends request to Spring Boot backend
4. Backend sends prompt to Gemini API
5. AI generates a context-aware email reply
6. Response is returned to extension
7. Reply is inserted directly into Gmail compose box

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-email-reply-generator.git
```

---

### 2️⃣ Backend Setup (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

---

### 4️⃣ Load Chrome Extension

1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `extension/` folder

---

## 🧩 Project Structure

```
AI-Email-Reply-Generator/
│
├── backend/          # Spring Boot backend
├── frontend/         # React frontend
├── extension/        # Chrome extension (content scripts)
├── README.md
```

---

## 🔥 Key Highlights

* Real-world Gmail workflow integration
* Full-stack AI system using modern architecture
* Chrome Extension with DOM manipulation & MutationObserver
* Secure backend API design using Spring Boot
* Production-style deployment (Netlify frontend)
* End-to-end AI automation pipeline

---

## 🌍 Use Cases

* Professional email writing
* Customer support automation
* Office communication assistance
* Productivity enhancement tool

---

## 🚀 Future Improvements

* Multiple AI-generated reply suggestions
* Smart email context detection
* Reply history storage using Chrome storage API
* User-controlled tone customization panel
* Direct Gmail reply replacement feature
* User authentication system
* 

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!

---
