# Azure Cloud Upload Dashboard

Azure Cloud Upload Dashboard is a full-stack file upload dashboard built with React, Node.js, MongoDB, and Azure Blob Storage. It supports authenticated users, file upload workflows, cloud storage integration, and a clean dashboard UI for managing uploaded assets.

## Features

- JWT-based user authentication with signup and login flows
- Secure password hashing with bcrypt
- File uploads handled through Multer in memory storage
- Azure Blob Storage integration for cloud file persistence
- Uploaded file listing and delete support
- React + Vite frontend with Tailwind CSS styling
- Axios-powered API communication
- Express.js REST API with modular routes, controllers, services, middleware, and models

## Screenshots

### Login Page

![Login Page](https://github.com/ankit85456/azure-cloud-upload-dashboard/blob/669c8e6470077058502c64888e1296c6c6495f37/Screenshot%202026-05-13%20235841.png)

---

### Dashboard

![Dashboard](https://github.com/ankit85456/azure-cloud-upload-dashboard/blob/669c8e6470077058502c64888e1296c6c6495f37/Screenshot%202026-05-14%20000003.png)

---

### Upload Section

![Upload Section](https://github.com/ankit85456/azure-cloud-upload-dashboard/blob/669c8e6470077058502c64888e1296c6c6495f37/Screenshot%202026-05-14%20000020.png)

---

### Uploaded Files

![Uploaded Files](https://github.com/ankit85456/azure-cloud-upload-dashboard/blob/669c8e6470077058502c64888e1296c6c6495f37/Screenshot%202026-05-14%20000036.png)
```

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Axios, React Router
- Backend: Node.js, Express.js, Multer
- Authentication: JWT, bcryptjs
- Database: MongoDB, Mongoose
- Cloud Storage: Azure Blob Storage

## Project Structure

```text
azure-file-upload/
|-- backend/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- services/
|   |-- package.json
|   `-- server.js
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- context/
|   |   |-- pages/
|   |   `-- services/
|   |-- package.json
|   `-- vite.config.js
|-- .gitignore
`-- README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/ankit85456/azure-cloud-upload-dashboard.git
cd azure-cloud-upload-dashboard
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Create the backend environment file:

```bash
cd ../backend
cp .env.example .env
```

Start the backend server:

```bash
npm start
```

Start the frontend development server:

```bash
cd ../frontend
npm run dev
```

## Environment Variables

Create `backend/.env` from `backend/.env.example` and provide these values:

```env
PORT=5000
MONGO_URI=replace-with-your-mongodb-connection-uri
JWT_SECRET=replace-with-a-strong-secret
AZURE_STORAGE_CONNECTION_STRING=replace-with-your-azure-storage-connection-string
AZURE_CONTAINER_NAME=<container-name>
```

Never commit `.env`, Azure connection strings, MongoDB credentials, JWT secrets, or other private keys.

## Azure Blob Storage Setup

1. Create an Azure Storage Account in the Azure Portal.
2. Create a Blob container for uploaded files.
3. Copy the storage account connection string from Access keys.
4. Add the connection string to `AZURE_STORAGE_CONNECTION_STRING`.
5. Add the container name to `AZURE_CONTAINER_NAME`.
6. Make sure the backend service has permission to read, upload, list, and delete blobs.

## MongoDB Setup

1. Create a MongoDB Atlas cluster or use a local MongoDB instance.
2. Create a database for the dashboard.
3. Create a database user with the required read/write permissions.
4. Allow your development IP address in MongoDB Atlas Network Access.
5. Add the connection URI to `MONGO_URI` in `backend/.env`.

## Available Scripts

Backend:

```bash
cd backend
npm start
```

Frontend:

```bash
cd frontend
npm run dev
npm run build
npm run lint
```

## Future Improvements

- Add role-based access control for administrators and standard users
- Add file metadata, search, sorting, and filtering
- Add upload progress indicators and drag-and-drop upload support
- Add server-side file validation for type and size limits
- Add automated tests for authentication, upload, and storage workflows
- Add CI/CD deployment workflow for frontend and backend services
- Add production configuration for CORS, rate limiting, and request logging

-Ankit Kumar
