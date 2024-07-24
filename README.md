# Full-Stack Task Manager

## Overview

This is a full-stack task manager application built with React, Redux Toolkit, MongoDB, Mongoose, Node.js, Material UI and Tailwind css. It allows users to manage tasks, including creating, reading, updating, and deleting tasks. The application features a modern UI with Material UI and uses Redux Toolkit for state management on the frontend.

## Features

- **User Authentication**: Register, login, and manage user sessions.
- **Task Management**: Create, read, update, and delete tasks.
- **Responsive UI**: Modern and responsive design using Material UI.
- **State Management**: Centralized state management using Redux Toolkit.
- **API Integration**: Backend integration using Node.js and MongoDB with Mongoose.

## Tech Stack

- **Frontend**:
  - React
  - Redux Toolkit
  - React Router
  - Material UI

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Cors

## Installation

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/onlyouness/task_mernStack.git
    cd task_mernStack
    ```

2. Navigate to the backend directory and install dependencies:

    ```bash
    cd server
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add your MongoDB connection string and other environment variables:

    ```plaintext
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory and install dependencies:

    ```bash
    cd ../client
    npm install
    ```

2.  Start the frontend development server:

    ```bash
    npm start
    ```

## Project Structure

- `server/`: Contains the Node.js backend server code.
  - `config/`: Configuration files, including database connection.
  - `middleware/`: Custom middleware.
  - `errors/`: Errors Handling.
  - `models/`: Mongoose models.
  - `routes/`: API routes.
  - `index.js`: Entry point for the backend server.

- `frontend/`: Contains the React frontend code.
  - `src/`: Source code for the frontend.
    - `components/`: React components.
    - `features/`: Redux slices and state management.
    - `pages/`: React pages.
    - `App.js`: Main React component.
    - `index.js`: Entry point for the frontend application.

## API Endpoints

- `POST /api/v1/register`: Register a new user.
- `POST /api/v1/login`: Login an existing user.
- `GET /api/v1/tasks`: Get all tasks.
- `POST /api/v1/tasks`: Create a new task.
- `PUT /api/v1/tasks/:id`: Update an existing task.
- `DELETE /api/v1/tasks/:id`: Delete a task.

## Usage

1. Register a new user or login to access the task manager features.
2. Create, update, view, and delete tasks through the user interface.
3. The frontend application communicates with the backend API to manage tasks and user sessions.

## Deployment

The application can be deployed to platforms like Vercel for the frontend and services like Heroku or Render for the backend. Ensure that you configure environment variables and build settings according to the deployment platform's requirements.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request describing your changes.

