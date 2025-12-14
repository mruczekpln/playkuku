# >playkuku

## 1. Overview
Web-based implementation of the card game "Kuku".

## 2. The Rules (Logic)
*The server acts as the "Dealer" and "Referee".*

### Setup
- **Deck:** 24 Cards (9, 10, J, Q, K, A of all suits).
- **Players:** 2 to 4.
- **Deal:** Every player gets 3 cards. The starting player (Dealer) gets 4.

### The Loop
1.  **Action:** The player with 4 cards must select 1 card to pass to their neighbor (Clockwise).
2.  **Transfer:** The card moves instantly to the neighbor's hand.
3.  **Check:** The neighbor now has 4 cards. The turn passes to them.
4.  **Win Condition:** If a player holds **3 cards of the same Rank** or **3 cards of the same Suit**, they can click the **"Kuku!"** button.
5.  **End:** The server validates the hand. If valid, the round ends.

## 3. Technology Stack

### Frontend (Client)
- **Build Tool:** Vite (React + SWC + TypeScript).
- **Routing:** **TanStack Router** (Type-safe routing & URL state management).
- **State:** React Context API + useReducer.
- **Networking:** `socket.io-client`.
- **Styling:** Tailwind CSS.

### Backend (Server)
- **Language:** Python 3.10+.
- **Server Engine:** Uvicorn (ASGI).
- **Framework:** FastAPI.
- **Networking:** `python-socketio` (AsyncServer).
- **Storage:** In-Memory Python Dictionary (Global `GAMES` dict).

## 4. Project infrastructure diagram

<img width="1144" height="1708" alt="image" src="https://github.com/user-attachments/assets/5ce51846-ad80-4dc4-bd13-3e638c10cfd5" />

## 5. MVP Roadmap

### Feature: Project Setup & Connectivity
- **Branch:** `feature/project-setup`
- **Description:** Initialize the Python backend (FastAPI/Uvicorn), the React frontend (Vite/TanStack Router/Tailwind), and establish a working bidirectional WebSocket connection.

### Feature: Basic UI Skeleton
- **Branch:** `feature/ui-skeleton`
- **Description:** Build the static UI components (Buttons, Inputs, Card visuals) and layout the "Lobby" and "Game Board" screens using Tailwind CSS, ensuring the app looks correct before adding complex logic.

### Feature: Lobby & Room Management
- **Branch:** `feature/lobby-system`
- **Description:** Connect the UI to the backend to handle creating unique rooms, joining via codes, and synchronizing the player list in real-time.

### Feature: Core Game Mechanics
- **Branch:** `feature/gameplay-loop`
- **Description:** Implement the deck generation, shuffling, dealing of cards to hands, and the logic for the active player to pass a card to their neighbor's hand.

### Feature: Win Validation (Kuku Logic)
- **Branch:** `feature/win-condition`
- **Description:** Implement the "Kuku" button functionality and the server-side algorithm to validate if a hand contains 3 matching ranks or suits, triggering the "Game Over" state.

### Feature: Visual Polish
- **Branch:** `feature/ui-polish`
- **Description:** Apply final design touches, animations (Framer Motion) for card movements, and sound effects to enhance the game feel.
