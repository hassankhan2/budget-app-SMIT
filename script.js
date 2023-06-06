let monthlyBudget = 0;
let expenses = [];

function addBudget() {
  const budgetInput = document.getElementById('budget-input');
  const budgetDisplay = document.getElementById('budget-display');
  monthlyBudget = parseFloat(budgetInput.value);
  budgetDisplay.textContent = monthlyBudget.toFixed(2);
  updateRemainingBudget();
  budgetInput.value = '';
}

function addExpense() {
  const descriptionInput = document.getElementById('description-input');
  const amountInput = document.getElementById('amount-input');
  const dateInput = document.getElementById('date-input');

  const expense = {
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value),
    date: dateInput.value
  };

  expenses.push(expense);

  displayExpense(expense);
  updateExpensesTotal();
  updateRemainingBudget();

  descriptionInput.value = '';
  amountInput.value = '';
  dateInput.value = '';
}

function displayExpense(expense) {
  const expensesTable = document.getElementById('expenses-table');

  const row = expensesTable.insertRow();
  const descriptionCell = row.insertCell();
  const amountCell = row.insertCell();
  const dateCell = row.insertCell();

  descriptionCell.textContent = expense.description;
  amountCell.textContent = 'Rs:' + expense.amount.toFixed(2);
  dateCell.textContent = expense.date;
}

function updateExpensesTotal() {
  const expensesTotal = document.getElementById('expenses-total');
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  expensesTotal.textContent = total.toFixed(2);
}

function updateRemainingBudget() {
  const remainingBudget = document.getElementById('remaining-budget');
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = monthlyBudget - totalExpenses;
  remainingBudget.textContent = remaining.toFixed(2);
}
