# Counter App (Clojure + React)

A simple full-stack counter application

---

# 🧱 Tech Stack

## Backend

* Clojure
* Pedestal (HTTP server)
* clojure.data.json
* Jetty

## Frontend

* React
* TypeScript
* Fetch API

---

# 📁 Project Structure

```
counter-project/
│
├── backend/
│   ├── deps.edn
│   └── src/counter/
│       ├── server.clj
│       ├── routes.clj
│       ├── handlers.clj
│       └── state.clj
│
└── counter/
    ├── package.json
    └── src/
        └── api.tsx
        └── App.tsx
        └── Counter.tsx
        └── main.tsx
```

---

# 🚀 Backend Setup

## 1️⃣ Install Clojure CLI

https://clojure.org/guides/install_clojure

---

## 3️⃣ Run Backend

From the backend directory:

```bash
clojure -M:run
```

Server runs on:

```
http://localhost:8080
```

---

# 🌐 API Endpoints

### Get current value

```
GET /api/value
```

### Increment

```
POST /api/increment
```

### Reset

```
POST /api/reset
```

All responses return JSON:

```json
{ "value": 3 }
```

---

# 🧪 Testing With curl

Save cookies:

```bash
curl http://localhost:8080/api/value
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🧠 Limitations

* Data stored in memory
* No persistence
* No authentication
* Not production-ready

---

# 🔮 Possible Improvements

* Use PostgreSQL
* Add rate limiting
* Use HTTPS cookies
* Deploy with Docker
