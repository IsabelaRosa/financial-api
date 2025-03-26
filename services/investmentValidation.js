const moment = require('moment');

function validateInvestmentText(text, propertyName) {
  if(typeof text !== 'string') {
    throw new Error(`O valor informado para ${propertyName} deve ser um texto.`);
  } 
  if (text.trim().length === 0) {
    throw new Error(`O campo ${propertyName} não pode estar vazio.`);
  }
  return text;
}

function validateInvestmentValue(value) {
  if (value <= 0) {
    throw new Error('O valor do investimento deve ser maior que 0.');
  }
  if(typeof value !== 'number') {
    throw new Error(`O valor informado para value deve ser um número.`);
  }
  return value;
  }

function validateInvestmentDate(date) {
  const investmentDate = moment(date, 'DD/MM/YYYY', true);
  if (!investmentDate.isValid()) {
    throw new Error('Formato de data inválido. Use o formato DD/MM/YYYY.');
  }
  if (investmentDate.toDate() > new Date()) {
    throw new Error('A data do investimento não pode estar no futuro.');
  }
  return investmentDate;
}

module.exports = {
  validateInvestmentText,
  validateInvestmentValue,
  validateInvestmentDate,
};