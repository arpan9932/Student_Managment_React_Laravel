

# Student_Management_React_Laravel

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
Student_Management_React_Laravel is a CRUD (Create, Read, Update, Delete) application designed to manage student information. The project utilizes React for the frontend and Laravel for the backend, ensuring a robust and responsive user experience. React Router is employed for seamless navigation between pages, while Laravel REST API handles data fetching and storage.

## Features
- **Create Student**: Add new student records.
- **Read Student**: View details of existing students.
- **Update Student**: Modify details of existing students.
- **Delete Student**: Remove student records.
- **Routing**: Smooth navigation between different pages using React Router.
- **REST API**: Efficient data management with Laravel REST API.

## Technologies Used
- **Frontend**: React, React Router
- **Backend**: Laravel, REST API
- **Database**: MySQL (or any other database supported by Laravel)
- **Others**: Axios for HTTP requests, Bootstrap for styling (optional)

## Setup
To set up the project locally, follow these steps:

### Prerequisites
- Node.js
- npm or yarn
- PHP
- Composer
- MySQL (or any other database supported by Laravel)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/arpan9932/Student_Managment_React_Laravel.git
   cd Student_Management_React_Laravel
   ```

2. **Set up the backend:**
   ```sh
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

   - Configure your database settings in the `.env` file.

   ```sh
   php artisan migrate
   php artisan serve
   ```

3. **Set up the frontend:**
   ```sh
   cd ../frontend
   npm install
   npm start
   ```

## Usage
Once the setup is complete, you can start the development server for both frontend and backend.

### Running Backend
```sh
php artisan serve
```

### Running Frontend
```sh
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure
```plaintext
Student_Management_React_Laravel/
├── backend/               # Laravel backend
│   ├── app/
│   ├── config/
│   ├── database/
│   ├── public/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   └── .env
├── frontend/              # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
└── README.md
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
