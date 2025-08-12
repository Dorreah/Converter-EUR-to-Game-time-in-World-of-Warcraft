function convert() {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  let result = 0;
  if (unit === "eurosToGameTime") {
    result = inputValue / 12.99;
  }
  const resultString = "Well, for " + inputValue + " euros you can buy " + result + " months of game time!";
  console.log(resultString);
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
}
