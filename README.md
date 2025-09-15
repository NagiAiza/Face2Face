# 💇‍♀️ Face2Face - AI Hairstyle Swapping Web App

Face2Face is a full-stack web application that uses AI to allow users to try on different hairstyles. Users can upload a photo of themselves, and the application's generative AI will realistically swap their current hair with a new style. This project was developed as a proof-of-concept during an intensive student internship.

---

## 📜 About The Project

This project was born from a desire to create an innovative and accessible tool in the beauty and tech space. Developed in a start-up-like environment by a team of engineering students, Face2Face was inspired by existing, high-cost "face swapping" services. The goal was to build a competing product using modern AI and web technologies to offer a similar, high-quality experience at a lower cost, targeting both curious individuals and professionals like hairdressers.

The project was divided into two main missions: first, developing the core AI for hairstyle modification, and second, building a user-friendly website to make this technology accessible to everyone.

---

## ✨ Features

* **AI-Powered Hairstyle Swapping**: The core of the application is a Generative Adversarial Network (GAN) that can modify the hairstyle in a user's photo.
* **Facial Feature Preservation**: The AI uses facial masking techniques to ensure that the user's original facial features are preserved, leading to a more coherent and realistic final image.
* **Secure User Authentication**: The platform includes a complete user registration and login system. Passwords are securely hashed using `bcrypt`, and sessions are managed with a token-based system.
* **Modern Web Interface**: The frontend is designed to be simple and intuitive, allowing users to easily upload their photo, choose a new style, and view the result.
* **Containerized Architecture**: The entire backend, including the Python AI service and the MongoDB database, is containerized with Docker. This ensures consistency across different development environments and simplifies deployment.

---

## 🛠️ Tech Stack

This project was built using a modern, full-stack approach, combining web technologies with a Python-based AI backend.

* **Frontend**: Next.js, React, TypeScript
* **Backend**: Node.js, NGINX (as a reverse proxy)
* **Database**: MongoDB (NoSQL)
* **AI / Machine Learning**: Python, TensorFlow, Generative Adversarial Networks (GANs)
* **DevOps**: Docker
* **Design**: Figma

---

## 📁 Project Structure

The repository is a monorepo containing the Next.js frontend, along with configuration for the containerized backend services.

/
├── components/      # Reusable React components
├── contexts/        # React context providers
├── pages/           # Next.js pages and API routes
├── posts/           # Content for the blog/CMS (TinaCMS)
├── public/          # Static assets
├── styles/          # Global styles
├── Dockerfile       # Instructions to build the Docker image
└── next.config.js   # Next.js configuration

---

## 🚀 Getting Started

To get a local copy up and running, you will need Node.js and Docker installed on your machine.

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn
* Docker and Docker Compose

### Installation & Execution

1.  **Clone the Repository**
    ```sh
    git clone [https://github.com/your-username/Face2Face.git](https://github.com/your-username/Face2Face.git)
    cd Face2Face
    ```

2.  **Set Up Environment Variables**
    * Create a `.env` file in the root of the project based on the `.env.example` file.
    * Add your MongoDB connection string and any other required secrets.
        ```
        MONGO_URI=your_mongodb_connection_string
        NEXT_PUBLIC_API_URL=http://localhost:8000/api
        ```

3.  **Build and Run with Docker**
    * The backend services (including the Python AI) are designed to be run within Docker containers. If a `docker-compose.yml` file is present, you can launch everything with one command:
        ```sh
        docker-compose up --build
        ```

4.  **Run the Frontend**
    * In a separate terminal, install the frontend dependencies and start the development server:
        ```sh
        npm install
        npm run dev
        ```

5.  Open your browser and navigate to `http://localhost:3000`.

---

## ⚠️ Project Status

This project was developed within a limited timeframe for an internship. While the core AI components and the web application's foundation were successfully built, the final step of fully integrating the AI service with the frontend website was not completed.
