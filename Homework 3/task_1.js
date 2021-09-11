//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let numbers = 0;
while (numbers <= 100) {
    let check = true;
    for (let i = 2; i < numbers; i++){
        if (numbers % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(numbers);
    numbers++;
}