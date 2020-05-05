const pushNumbers = document.querySelectorAll('.num');
const pressButton = document.getElementById('press');

pressButton.addEventListener('click', addNumbers);

function addNumbers() {
  let result = 0;
  for (let i = 0; i < Number(pushNumbers.length); i++){
    result += Number(pushNumbers[i].value);
    }
    const numberResult = document.getElementById('result');
    numberResult.innerHTML = result;  
}