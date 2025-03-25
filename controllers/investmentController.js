const investmentService = require('../services/investmentService');

async function getInvestments(req, res) {
  try {
    const investments = await investmentService.getInvestments();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createInvestment(req, res) {
  const investmentBody = req.body;
  try {
    const newInvestment = await investmentService.createInvestment(investmentBody);
    res.status(201).json(newInvestment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateInvestment(req, res) {
  const investmentId = req.params.id;
  const investmentBody = req.body;

  try {
    const investment = await investmentService.updateInvestment(investmentId, investmentBody);
    res.status(200).json(investment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteInvestment(req, res) {
  const investmentId = req.params.id;

  try {
    await investmentService.deleteInvestment(investmentId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getInvestments,
  createInvestment,
  updateInvestment,
  deleteInvestment
};