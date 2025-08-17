# 🗂️ Timestamp File Generator API with Node.js & Express

This project is a simple Node.js API using **Express**, **dotenv**, and **fs** (File System module) to dynamically generate timestamped files and serve their content via an HTTP GET request.

---

## 🚀 Features

- 🌐 Express server setup
- 📂 Creates a file with the current timestamp as the filename
- ⏱️ Saves the timestamp inside the file
- 📖 Reads the file content and sends it as a response
- 📦 Uses `dotenv` for environment configuration
- 🛡️ CORS enabled

---

## 🏗️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [date-fns](https://date-fns.org/)
- Node.js `fs` module
- [CORS](https://www.npmjs.com/package/cors)

---

🧠 How It Works
- Uses date-fns to format the current date and time.

- Writes the timestamp as content to a file named with the same timestamp.

- Reads the file content and sends it as the response.
