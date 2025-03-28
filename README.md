# Full-Stack Login Page

A secure and responsive full-stack login page built using modern web technologies.

## Features
- User authentication (Login)
- Secure password hashing
- JWT-based authentication
- Responsive UI
- Error handling & validation

## Tech Stack
### Frontend:
- React.js
- HTML, CSS, JavaScript
- Axios (for API calls)

### Backend:
- Node.js
- Express.js
- MongoDB (or any other database of choice)
- Bcrypt.js (for password hashing)
- JSON Web Token (JWT) for authentication

## Installation & Setup
### Prerequisites:
- Node.js installed
- MongoDB (if using a local database)

### Clone the Repository
```bash
git clone https://github.com/KashishMahajan1203/LOGINPAGE.git
cd full-stack-login-page
```

### Backend Setup
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the backend directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8080
```

#### Start Backend Server
```bash
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
```

#### Start Frontend Server
```bash
npm start
```

## Usage
1. Open `http://localhost:8080` in your browser.
2. 2. Log in with registered credentials.

## API Routes
### Auth Routes:
- `POST /auth/login` - Authenticate user & return JWT

## Screenshots
![Login Page](https://github.com/KashishMahajan1203/LOGINPAGE/blob/main/Screenshot%202025-03-28%20190451.png)
![Home Page](https://github.com/KashishMahajan1203/LOGINPAGE/blob/main/Screenshot%202025-03-28%20190810.png)



## Contributing
Pull requests are welcome! Feel free to submit any improvements or report issues.

## License
This project is licensed under the MIT License.
