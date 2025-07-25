const express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Define routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});