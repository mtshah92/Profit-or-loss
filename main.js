var initialPrice = document.querySelector("#intial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var tellButton = document.querySelector("#btn-tell-me");
var showMessage = document.querySelector("#showMessage");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(`Hey the loss is ${loss} amd the percent is ${lossPercentage}%`);
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is ${profit} amd the percent is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain no gain and no gain np pain");
  }
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

tellButton.addEventListener("click", submitHandler);

function showOutput(message) {
  showMessage.innerHTML = message;
}
