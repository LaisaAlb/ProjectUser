## User Project

This repository contains a full-stack application created to explore how HTTP requests work between the front-end and back-end. The application has the following main features:
 - User login (with JWT authentication).
 - User creation.
 - Updating existing users.

## Project Structure

## Front-End
 - The front-end was developed using Angular 19.
 - Main Dependencies
    - @angular/animations
    - @angular/forms
    - @angular/router
    - @angular/ssr
    - express (for server-side rendering) 

 - Available Scripts
    - start: Starts the application in development mode.
    - build: Builds the application for production.
    - watch: Monitors code changes and automatically builds.
    - serve:ssr:projeto-usuarios-front: Starts the SSR server for the front-end application.

- File Location
The Angular application files are located in the projeto-usuarios-front folder.

## Back-End
 - The back-end was developed using Node.js with Express and JWT for authentication.
 - Main Dependencies
    - express
    - jsonwebtoken
    - body-parser
    - cors
    - nodemon (for development)

 - Available Scripts
    - start: Starts the server in production mode.
    - start-dev: Starts the server in development mode using nodemon.

 - File Location
The back-end files are located in the projeto-usuarios-back folder.

## Installation

# Requirements
 - Make sure you have the following installed on your machine:
 - Node.js (v18 or higher)
 - Angular CLI (v19 or higher)

# Installation Steps
 - Clone the repository:
    - git clone https://github.com/your-username/projeto-usuarios.git
 - Navigate to the project directory:
    - cd projeto-usuarios

# Front-End
 - Install the front-end dependencies:
    - cd projeto-usuarios-front
    - npm install
    - Start the front-end: npm start

# Back-End
 - Install the back-end dependencies:
    - cd ../projeto-usuarios-back
    - npm install
    - Start the back-end: npm start

# Usage
    - Access the front-end at http://localhost:4200.
    - Perform login, user creation, and user update operations.
    - Available Endpoints in the Back-End
        - POST /login: Logs in the user.
        - POST /usuarios: Creates a new user.
        - PUT /usuarios/:id: Updates an existing user's information.

## Author
Developed by Laísa Alb.

## License
This project is licensed under the MIT License.

