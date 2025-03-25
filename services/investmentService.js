const investmentRepository = require('../repositories/investmentRepository');
const { validateInvestmentText, validateInvestmentValue, validateInvestmentDate } = require('./insvestmentValidation');

async function getInvestments() {
  return await investmentRepository.getInvestments();
}

async function createInvestment(investmentBody) {
  validateInvestmentText(investmentBody.name, 'name');
  validateInvestmentText(investmentBody.type, 'type');
  validateInvestmentValue(investmentBody.value);
  const investmentDate = validateInvestmentDate(investmentBody.date);
  investmentBody.date = investmentDate;

  return await investmentRepository.createInvestment(investmentBody);
}

async function updateInvestment(investmentId, investmentBody) {
  const investment = await investmentRepository.getInvestmentById(investmentId);
  if (investment == null) {
    throw new Error ('Investment not found.');
  }

  if (investmentBody.name !== undefined) {
    validateInvestmentText(investmentBody.name, 'name');
  }
  if (investmentBody.type !== undefined) {
    validateInvestmentText(investmentBody.type, 'type');
  }
  if (investmentBody.value !== undefined) {
    validateInvestmentValue(investmentBody.value);
  } 
  if (investmentBody.date !== undefined) {
    const investmentDate = validateInvestmentDate(investmentBody.date);
    investmentBody.date = investmentDate;
  }

  return await investmentRepository.updateInvestment(investmentId, investmentBody);
}

async function deleteInvestment(investmentId) {
  const investment = await investmentRepository.getInvestmentById(investmentId);
  if (investment == null) {
    throw new Error ('Investment not found.');
  }
  return await investmentRepository.deleteInvestment(investmentId);
}

module.exports = {
  getInvestments,
  createInvestment,
  updateInvestment,
  deleteInvestment
};