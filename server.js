const express = require('express');
const connectDB = require('./db');
const investmentController = require('./controllers/investmentController');
const app = express();
const cors = require('cors');
const port = 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/investments', investmentController.getInvestments);
app.get('/investments/:id', investmentController.getInvestmentById);
app.post('/investments', investmentController.createInvestment);
app.patch('/investments/:id', investmentController.updateInvestment);
app.delete('/investments/:id', investmentController.deleteInvestment);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
