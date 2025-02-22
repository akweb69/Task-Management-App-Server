# UniGrants-Server-Side

Welcome to **UniGrants**! This platform is designed to help students find and apply for scholarships seamlessly. With an intuitive user interface and powerful tools, UniGrants bridges the gap between students and their dreams.

---

## 🚀 Features

- **Scholarship Search**: Find scholarships based on location, eligibility, and application fees.
- **Application Management**: Track your applications easily.
- **User Roles**:
  - **Default Users**: Search and apply for scholarships.
  - **Admins**: Manage scholarship data and platform configurations.
  - **Moderators**: Moderate user-generated content and reviews.
- **Interactive Dashboard**: Statistical insights to monitor platform activities.
- **Responsive Design**: Optimized for all devices.
- **Secure Authentication**: Powered by Firebase for login and registration.

---

## 📊 Statistics Dashboard

Gain insights into platform performance:

- Total Scholarships Listed
- Total Applications Submitted
- Total Registered Users
- User Reviews Count

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Tailwind CSS
- Material UI
- Framer Motion

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- Firebase Authentication

### Hosting

- Vercel

---

## 🖥️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/UniGrants.git
   ```

2. Navigate to the project directory:

   ```bash
   cd UniGrants
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   MONGO_URI=your_mongodb_connection_string
   ```

5. Run the application:

   ```bash
   npm start
   ```

6. Deploy the backend to Vercel:
   ```bash
   vercel
   ```

---

## 📦 Folder Structure

```
UniGrants/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Statistics.js
│   ├── hooks/
│   │   ├── useAll_Schol.js
│   │   ├── useAllApply.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   ├── styles/
│   │   ├── global.css
├── .env
├── package.json
```

---

## 📋 API Endpoints

### Scholarships

- **GET** `/api/scholarships`: Fetch all scholarships.
- **POST** `/api/scholarships`: Add a new scholarship.
- **PATCH** `/api/scholarships/:id`: Update a scholarship.

### Applications

- **GET** `/api/applications`: Fetch all applications.
- **POST** `/api/applications`: Submit a new application.

### Users

- **GET** `/api/users`: Fetch all users.
- **PATCH** `/api/users/:id`: Update user roles or information.

---

## 🌐 Live Demo

Experience UniGrants live:
[UniGrants Platform](https://unigrants.netlify.app)

---

## 🤝 Contribution

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 📞 Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: akwebdev69@gmail.com
- **Phone**: +880 1768037870
- **Location**: Dhaka, Bangladesh
