const connectDB = require('./src/config/db');

require('dotenv').config();
const express = require('express' );
const app = express ( ) ;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

const apiRoutes = require('./src/routes/apiRoutes');
app.use(process.env.BASE_URI, apiRoutes);

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'API is running',
    endpoints: ['/dishes'],
  });
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});

