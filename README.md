# 1. Project Goal

To create a real-time multiplayer web application of the Polish card game **"Kuku"**. The app uses a high-performance Python backend to manage game state and a lightweight React frontend.

## 2. Technology Stack

### Frontend (Client)

- **Build Tool:** Vite (Faster & simpler than Next.js for games).
- **Framework:** React.
- **Routing:** React Router (v6).
- **State Management:** React Context API + useReducer.
- **Communication:** `socket.io-client`.

### Backend (Server)

- **Language:** Python 3.10+.
- **Framework:** **FastAPI** (serves the API and hosts the socket server).
- **WebSockets:** `python-socketio` (AsyncServer implementation).
- **Server:** Uvicorn (ASGI server to run Python async).

## 3. MVP Features

- [ ] **Lobby:** Create/Join room via 4-letter code.
- [ ] **Socket Events:**
  - `connect` / `disconnect`
  - `join_game(room_code, username)`
  - `pass_card(card_index)`
  - `declare_kuku()`
- [ ] **Game Loop:** Server validates move -> Updates State -> Broadcasts to Room.

## 4. Project infrastructure graph

![norbert](https://imgur.com/a/MmUUPag)
