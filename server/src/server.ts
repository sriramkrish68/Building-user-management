import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import eventRoutes from './routes';
import connectDB from './db'; // Adjust the path as needed

dotenv.config(); // Load environment variables from .env file

const app = express();

// Connect to database
connectDB();

app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Building Entry System API');
});

// Register event routes
app.use('/api', eventRoutes);

// Log the registered routes
app._router.stack.forEach((middleware: any) => {
  if (middleware.route) {
    console.log(middleware.route.path);
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
