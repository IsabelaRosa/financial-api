const Investment = require('../models/investment');

const getInvestments = async () => {
  try {
    const investments = await Investment.find();
    return investments;
  } catch (error) {
    throw new Error(error.message);
  }
}

const getInvestmentById = async (investmentId) => {
  try {
    const investments = await Investment.findById(investmentId);
    return investments;
  } catch (error) {
    throw new Error(error.message);
  }
}

const createInvestment = async (investmentBody) => {
  const investment = new Investment(investmentBody);
  try {
    const newInvestment = await investment.save();
    return newInvestment;
  } catch (error) {
    throw new Error(error.message);
  }
}

const updateInvestment = async (id, investmentBody) => {
  try {
    const saveInvestment = await Investment.findByIdAndUpdate(id, investmentBody, { new: true });
    return saveInvestment;
  } catch (error) {
    throw new Error(error.message);
  }
}

const deleteInvestment = async (id) => {
  try {
    await Investment.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getInvestments,
  getInvestmentById,
  createInvestment,
  updateInvestment,
  deleteInvestment
};