"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const express_1 = __importDefault(require("express"));
// Create an instance of an Express application
const app = (0, express_1.default)();
// Define the port number
const PORT = 3000;
// Define a route that returns 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
