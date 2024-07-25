const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const compression = require('compression');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
const cloudinaryRoutes = require('./routes/cloudinaryRoutes');
const gcsRoutes = require('./routes/gcsRoutes');
const courseRoutes = require('./routes/courseRoutes');
const paymentRoutes = require('./routes/phonePayRoutes');
const userCourseRoutes = require('./routes/userCourseRoutes');
const contactRoutes = require('./routes/ContactRoutes');
const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.use(express.json());
app.use(compression());

// Static files caching for 30 days
app.use((req, res, next) => {
  if (req.url.includes('/images/')) {
    res.setHeader('Cache-Control', 'public, max-age=2592000'); // Cache for 30 days
  }
  next();
});

// Routes
app.use('/auth', registrationRoutes);
app.use('/api', cloudinaryRoutes);
app.use('/api', gcsRoutes);
app.use('/api', courseRoutes);
app.use('/api', paymentRoutes);
app.use('/api', userCourseRoutes);
app.use('/api', contactRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../Client/build')));

// Catch-all for client routing
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Error handling for unsupported methods
app.use('/*', (req, res, next) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }
  next();
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 3002;

connectDB().then((conn) => {
  console.log(`MongoDB Connected: ${conn.connection.host}`);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error while connecting to MongoDB.', err);
});
