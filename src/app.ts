// Import necessary modules
import express, { Request, Response } from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Define a route that returns 'Hello World'
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});