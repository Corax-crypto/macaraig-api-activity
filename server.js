require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const chefRoutes = require('./src/routes/chefRoutes');
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base URI
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Routes
app.use('/api/chefs', chefRoutes);
app.use(BASE_URI, apiRoutes);

// Root route
app.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'API is running',
    endpoints: [`${BASE_URI}/dishes`, '/api/chefs'],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
