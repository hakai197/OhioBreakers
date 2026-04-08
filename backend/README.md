# Spring Boot Backend for Ohio Breakers

This folder will contain the Java 21 Spring Boot backend for authentication and user storage.

---

## Manual Setup Instructions

If automatic project generation fails, follow these steps:

1. Go to https://start.spring.io/
2. Project: Maven
3. Language: Java
4. Spring Boot: 3.2.5
5. Group: com.ohiobreakers
6. Artifact: backend
7. Name: backend
8. Java: 21
9. Dependencies: Web, Spring Data JPA, Spring Security, MySQL Driver
10. Generate and unzip into this `backend/` folder.

---

Once the project is present, I will continue with configuration and implementation.

---

## Authentication API Usage

### Register
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - `200 OK` `{ "message": "User registered successfully" }`
  - `400 Bad Request` `{ "message": "Username already exists" }`

### Login
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - `200 OK` `{ "token": "<JWT>" }`
  - `400 Bad Request` `{ "message": "Invalid credentials" }`

### CORS
- CORS is enabled for `http://localhost:3000` (frontend dev server).
- All methods and headers allowed. Credentials supported.

### JWT Usage
- The frontend must store the JWT (from `/api/auth/login`) in `localStorage` and include it in the `Authorization: Bearer <JWT>` header for protected API requests.

---
