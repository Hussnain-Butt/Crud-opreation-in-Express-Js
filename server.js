const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
