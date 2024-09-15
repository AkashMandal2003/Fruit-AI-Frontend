# Fruit.ai

Fruit.ai is a comprehensive health manager application that provides detailed information about various fruits. It includes a chatbot for interactive assistance, a FAQ management system, and more. The project is built using React for the frontend and Flask for the backend, offering a powerful and user-friendly experience.

## Project Structure

### Frontend (React)

- **src/**
  - **components/**: Reusable React components (e.g., `FruitList`, `Navbar`, `AuthContext`).
  - **pages/**: Page-specific components (e.g., `LoginPage`, `HomePage`, `ChatbotPage`, `TranslatorPage`, `FAQPage`, `AboutPage`).
  - **Services/**: Chatbot functionality (e.g., `ActionProvider`, `config`, `MessageParser` ).
  - **App.js**: Main entry point for the React application.
  - **index.js**: Renders the React application into the DOM.
  - **styles/**: CSS or styling-related files.

### Backend (Flask)

- **app/**
  - **controllers/**: Route handlers and API endpoints (e.g., for managing FAQs and fruit details).
  - **models/**: Database models and schemas.
  - **utils/**: Utility functions and helpers.
  - **__init__.py**: Initializes the Flask application and configures the database connection.
  - **config.py**: Configuration settings for the Flask application, including database URI and other settings.

## Setup and Run Instructions

### Prerequisites

- Node.js and npm (for React)
- Python 3.8+ (for Flask)
- MongoDB Atlas account (for database)

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AkashMandal2003/Fruit-AI-Frontend.git
    ```

2. Navigate to the frontend directory:
    ```bash
    cd fruit-ai-frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the application.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd fruit-ai-backend
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Configure the Flask application:

   Update the `config.py` file with your MongoDB Atlas URI:
    ```python
    class Config:
        MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/faqs?retryWrites=true&w=majority'
    ```

5. Run the Flask application:
    ```bash
    python run.py
    ```

6. Open your browser and navigate to `http://localhost:5000` to access the backend API.

## Design Decisions

- **Frontend**: Built with React to provide a dynamic and responsive user interface. The application uses Material-UI for styling and includes a custom chatbot built with `react-chatbot-kit`.
- **Backend**: Developed with Flask to handle API requests and manage the database. MongoDB Atlas is used as the database for storing FAQ data and fruit details.
- **State Management**: Utilized React’s Context API for managing authentication state and application-wide settings.
- **Deployment**: Plan to deploy the frontend and backend on platforms like Vercel and Render, respectively, for a seamless production experience.

## GitHub Repositories

- **Frontend**: [https://github.com/AkashMandal2003/Fruit-AI-Frontend](https://github.com/AkashMandal2003/Fruit-AI-Frontend)
- **Backend**: [https://github.com/AkashMandal2003/Fruit-AI-Backend](https://github.com/AkashMandal2003/Fruit-AI-Backend)


## Contact

For any questions or support, please reach out to [your-email@example.com](mailto:iakashman8653@gmail.com).

