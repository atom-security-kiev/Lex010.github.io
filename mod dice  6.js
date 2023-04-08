function dice(sides) {
    sides = 20;
  const randomNumber = Math.floor(Math.random() * sides) + 1;
        return randomNumber
    
};
//console.log(dice())

//Print 'return' to page

function printNumber(number) {
    const placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

const button = document.getElementById('button');

button.onclick = function() {
    const result = dice();
    printNumber(result)
};