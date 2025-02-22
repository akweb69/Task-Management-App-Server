# Tasknest - Server-side

## Project Overview

This is the **server-side** of **Tasknest**, a Task Management Application built using **Node.js**, **Express.js**, and **MongoDB**. It handles authentication, task management, and real-time synchronization to ensure smooth user interactions.

## Live Link

[Tasknest Live App](https://cheerful-bonbon-5d608b.netlify.app)

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Firebase Authentication** - User authentication with Google Sign-In
- **WebSockets** - Real-time updates
- **MongoDB Change Streams** - Ensuring real-time syncing

## Features

- User authentication with Firebase (Google Sign-In)
- Store user details (User ID, email, display name) in the database
- CRUD operations for task management
- Reordering and moving tasks across categories (To-Do, In Progress, Done)
- Real-time updates for task modifications using WebSockets or MongoDB Change Streams
- Task deletion with permanent database removal
- Optimistic UI updates for a smooth user experience

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repo_url>
   cd serverside
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     FIREBASE_ADMIN_KEY=<your_firebase_key>
     ```
4. **Run the server:**
   ```bash
   npm start
   ```
   or for development mode with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint           | Description                               |
| ------ | ------------------ | ----------------------------------------- |
| POST   | `/api/auth/signup` | User registration (Google Sign-In)        |
| POST   | `/api/auth/login`  | User login                                |
| GET    | `/api/tasks`       | Retrieve all tasks for the logged-in user |
| POST   | `/api/tasks`       | Add a new task                            |
| PUT    | `/api/tasks/:id`   | Update task details                       |
| DELETE | `/api/tasks/:id`   | Delete a task                             |

## Folder Structure

```
serverside/
│-- src/
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & validation middleware
│   ├── config/        # Database connection & env setup
│   ├── utils/         # Helper functions
│   ├── server.js      # Entry point
│-- .env               # Environment variables
│-- package.json       # Dependencies & scripts
│-- README.md          # Project documentation
```

## Bonus Features (Optional but Recommended)

- **Dark Mode Toggle**
- **Task Due Dates with Color Indicators** (e.g., overdue tasks appear red)
- **Simple Activity Log** (e.g., "Task moved to Done")

## Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the **MIT License**.

## Contact

For any inquiries or support, feel free to reach out:

- **Email:** akwebdev69@gmail.com
- **GitHub:** [akweb69](https://github.com/akweb69)
