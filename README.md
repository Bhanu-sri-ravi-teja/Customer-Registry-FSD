Customer Care Registry System
A full-stack web application designed to streamline customer support, manage complaint tickets, and facilitate seamless communication between customers, support agents, and system administrators.

This project utilizes a Node.js/Express backend with MongoDB for secure data storage, and a lightweight, fast HTML/CSS/Vanilla JS frontend styled with Bootstrap 5.

Key Features
🔐 Role-Based Access Control (RBAC): Secure JWT authentication tailored for three distinct roles:

Customers: Can raise new tickets, view their ticket history, and communicate with agents.

Agents: Possess a dedicated queue of assigned tickets, can update ticket statuses, and communicate with customers.

Admins: Have a bird's-eye view of all system tickets and can assign open tickets to specific agents.

💬 Dynamic Ticket Workspaces: A dedicated chat interface for every ticket, dynamically adapting the UI (left/right alignment) based on the logged-in user.

🕵️ Internal Notes: Agents and Admins can leave yellow "Internal Only" notes on tickets that are completely hidden from the Customer's view.

📊 Status Tracking: Tickets move seamlessly through statuses like Open, Assigned, In Progress, Resolved, and Closed.

Backend

Runtime: Node.js

Framework: Express.js

Database: MongoDB Atlas (Mongoose ODM)

Security: JSON Web Tokens (JWT) & bcryptjs (Password Hashing)

Middleware: CORS, Body-Parser, Custom Error Handling

Frontend

Structure: HTML5

Styling: CSS3 & Bootstrap 5

Logic: Vanilla JavaScript (Fetch API for asynchronous REST API requests)
