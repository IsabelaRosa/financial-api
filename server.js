const express = require('express');
const connectDB = require('./db');
const investmentController = require('./controllers/investmentController');
const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.get('/investments', investmentController.getInvestments);
app.post('/investments', investmentController.createInvestment);
app.patch('/investments/:id', investmentController.updateInvestment);
app.delete('/investments/:id', investmentController.deleteInvestment);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
