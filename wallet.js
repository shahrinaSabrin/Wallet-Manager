
document.addEventListener("DOMContentLoaded", function() {
  // Use the History API to navigate to another page without a full reload
    window.history.pushState({}, "", "./index.html");
    // Trigger the popstate event to ensure the browser updates the page
    window.dispatchEvent(new PopStateEvent("popstate"));
});
const updateWithdraw = () => {
  const inputWithdraw = document.getElementById("withDrawMoney");
  let currentBalanceBox = document.getElementById("balanceAmound").textContent;
  let withdrawBox = document.getElementById("withdrawBox").textContent;

  if (parseInt(inputWithdraw.value) > parseInt(currentBalanceBox)) {
    alert("Sorry! You have insufficient balance");
    return;
  }

  const newBalance = parseInt(currentBalanceBox) - parseInt(inputWithdraw.value);
  const newWithdraw = parseInt(withdrawBox) + parseInt(inputWithdraw.value);

  // Set the New Status
  document.getElementById("balanceAmound").textContent = newBalance;
  document.getElementById("withdrawBox").textContent = newWithdraw;

  // Clear the input field
  inputWithdraw.value = "";
};

const updateDeposit = () => {
  let inputDeposit = document.getElementById("depositMoney");
  let currentBalanceBox = document.getElementById("balanceAmound").textContent;
  let depositBox = document.getElementById("depositBox").textContent;

  if (parseInt(inputDeposit.value) < 0) {
    alert("Please enter a valid amount");
    return;
  }

  const newBalance = parseInt(inputDeposit.value) + parseInt(currentBalanceBox);
  const newDeposit = parseInt(depositBox) + parseInt(inputDeposit.value);

  // Set the New Status
  document.getElementById("balanceAmound").textContent = newBalance;
  document.getElementById("depositBox").textContent = newDeposit;

  // Clear the input field
  inputDeposit.value = "";
};

//get the buttons
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withDrawBtn");

depositBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  updateDeposit();
});

withdrawBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  updateWithdraw();
});
