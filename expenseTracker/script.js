document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const dsiplayExpenseList = document.getElementById("expense-list");
  const displayTotalAmount = document.getElementById("total-amount");

  let expenseList = JSON.parse(localStorage.getItem("expensesList")) || [];
  let totalAmount = calculateTotalAmount();
  renderExpense();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const saveExpenses = {
        id: Date.now(),
        name,
        amount,
      };

      expenseList.push(saveExpenses);
      savetoLocalStorege();
      calculateTotalAmount();
      renderExpense();

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    } else {
      alert("Your Input vlaues are not valid");
    }
  });

  function renderExpense() {
    dsiplayExpenseList.innerHTML = "";
    expenseList.forEach((expense) => {
      const li = document.createElement("li");
      li.classList.add("list-item");
      li.innerHTML = `<span class="name">${expense.name}</span><span class="amount">${expense.amount}</span
              ><button class="delete-btn" data-id="${expense.id}">Delete</button>`;
      dsiplayExpenseList.appendChild(li);
    });
    displayTotalAmount.textContent = calculateTotalAmount();
  }

  dsiplayExpenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.getAttribute("data-id"));
      expenseList = expenseList.filter((exp) => exp.id !== id);
      savetoLocalStorege();
      renderExpense();
    }
  });

  function calculateTotalAmount() {
    return expenseList.reduce((sum, expense) => sum + expense.amount, 0);
  }
  function savetoLocalStorege() {
    localStorage.setItem("expensesList", JSON.stringify(expenseList));
  }
});
