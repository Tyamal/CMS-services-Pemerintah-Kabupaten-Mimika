// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mimika', { useNewUrlParser: true, useUnifiedTopology: true });

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Service = mongoose.model('Service', serviceSchema);

// API Routes
app.get('/api/services', async (req, res) => {
  const services
