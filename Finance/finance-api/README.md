Finance Tracker REST API:
This is a simple REST API built using Node.js, Express, and Firebase Realtime Database. It enables users to manage their Users, Expenses, and Income data.



 Technologies Used:

- Node.js
- Express.js
- Firebase Admin SDK
- dotenv
- nodemon (for development)


### Project Structure:

```text
finance-api/
├── config/
│   └── firebase.js
├── controllers/
│   ├── usersControllers.js
│   ├── expensesControllers.js
│   └── incomeControllers.js
├── routes/
│   ├── users.js
│   ├── expenses.js
│   └── income.js
├── .env
├── serviceAccountKey.json
├── app.js
└── package.json
```


Setup Instructions:

1. Clone the repository:

git clone https://github.com/yourusername/finance-api.git
cd finance-api


2. Install dependencies:

npm install



3. Setup environment variables:

Create a `.env` file in the root:

FIREBASE_DATABASE_URL=https://finance-api-ass-default-rtdb.firebaseio.com
PORT=3006

4. Add Firebase Service Account

Place your `serviceAccountKey.json` inside the `config/` folder.

5. Run the app

npx nodemon app.js



 API Endpoints:

🔹 Root

- `GET /` – Welcome message and list of available endpoints.
🔹 Users

- `GET /users` – Get all users.
- `POST /users` – Add a new user.
- `PUT /users/:id` – Update user by ID.
- `DELETE /users/:id` – Delete user by ID.

🔹 Expenses

- `GET /expenses` – Get all expenses.
- `POST /expenses` – Add a new expense.
- `PUT /expenses/:id` – Update expense by ID.
- `DELETE /expenses/:id` – Delete expense by ID.

🔹 Income

- `GET /income` – Get all income entries.
- `POST /income` – Add a new income entry.
- `PUT /income/:id` – Update income by ID.
- `DELETE /income/:id` – Delete income by ID.

##  API Data Snapshots

###  Users
![Users](./assets/users.png)

###  Income
![Income](./assets/income.png)

###  Expenses
![Expenses](./assets/expenses.png)



 Error Handling:

All endpoints include basic error handling for:
- Firebase connection issues
- Invalid IDs
- Missing required fields

Responses will return meaningful messages with appropriate status codes.


 Environment Variables:

These must be stored in a `.env` file:

| Variable | Description |
|----------|-------------|
| `FIREBASE_DATABASE_URL` | Your Firebase database URL |
| `PORT` | The port your server runs on (e.g., 3006) |


Dependencies:


"dependencies": {
  "express": "^4.18.2",
  "firebase-admin": "^11.5.0",
  "dotenv": "^16.0.3"
},
"devDependencies": {
  "nodemon": "^3.0.1"
}




 Deployment:

This project can be deployed using any platform that supports Node.js like:

- Render.com
- Railway.app
- Vercel (as an API serverless function)
- Firebase Cloud Functions

- Don't forget to add your `.env` values securely in deployment settings.

 Postman Collection:

You can create a Postman collection with the following endpoints to test the API manually.
###  Postman Collection
[Click here to test the API via Postman](https://manoshree24-699974.postman.co/workspace/Manoshree's-Workspace~30e75051-9c62-4861-8aba-2a70bbbd544b/request/47244167-9142ac4f-4c6b-4248-9881-abe4677a17fd?action=share&source=copy-link&creator=47244167)

Author:

This project was developed by "Manoshree" as part of a backend development assignment.  
It demonstrates core REST API concepts, Firebase integration, and Express-based routing best practices.
