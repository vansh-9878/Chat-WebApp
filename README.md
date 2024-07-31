# Web Chatting Project

This is a real-time chat application that allows users to sign up and engage in live conversations with other people. The application is built with modern web technologies and offers a seamless chatting experience.

## Features

- **User Authentication**: Secure signup and login using email and password.
- **Real-Time Chat**: Instant messaging powered by WebSockets for real-time communication.

## Technologies Used

- **Frontend**: 
  - React.js
  - Bootstrap for styling
- **Backend**: 
  - Node.js with Express.js for server-side logic
  - Socket.io for real-time communication
- **Database**:
  - MongoDB for storing user data and chat history
- **Authentication**:
  - JWT (JSON Web Tokens) for secure user authentication

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm 
- MongoDB

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/web-chatting-project.git
   cd Chat-WebApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   cd frontend
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```plaintext
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application**:
   -To run the backend , use the following command:

    ```bash
    npm run start
    ```

    -To run the frontend , use the following command:

    ```bash
    npm run dev
    ```

   The application will be accessible at `http://localhost:5172`.


## Usage

1. **Sign Up**: Create a new account using your unique username and a secure password.
2. **Log In**: Access your account by logging in.
3. **Choose a person**: Select the person you want to talk to.


## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or issues, feel free to contact the project maintainers:

- GitHub: [@vansh-9878](https://github.com/vansh-9878)

---
