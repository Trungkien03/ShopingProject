const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const accountRoutes = require('./routes/accountRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/accounts', accountRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
