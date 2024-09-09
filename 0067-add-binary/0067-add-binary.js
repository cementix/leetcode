var addBinary = function(a, b) {
    let carry = 0; // Инициализируем перенос
    let res = ''; // Переменная для результата

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry; i--, j--) {
        let firstDigit = Number(a[i]) || 0; // Если i вышло за пределы, используем 0
        let secondDigit = Number(b[j]) || 0; // То же для второго числа

        let sum = firstDigit + secondDigit + carry; // Суммируем оба бита и перенос

        carry = Math.floor(sum / 2); // Если сумма >= 2, переносим единицу
        res = (sum % 2) + res; // Остаток деления добавляем в результат
    }

    return res;
};